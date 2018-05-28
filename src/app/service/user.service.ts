/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is User service i.e. common Http services contains methods to get,put,post,delete requests 
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; //use to share data b/w components
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Headers, RequestOptions, Response } from '@angular/http';
import { NoteResponse } from '../model/noteresponse';
import { CurrentUserResp } from '../model/currentuserresp';
import { environment } from "../../environments/environment";

/*It looks similar to component file but  but it uses the @Injectable() 
decorator, which means we can import it. into other components and access
 its properties and methods.*/

@Injectable()
export class UserService {

  /*model property for class userservice can accept any object */
  model: any = {};
  private searchSubject=new Subject<any>();
  searchObservable$=this.searchSubject.asObservable();


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': this.getToken()
     //'Authorization': localStorage.getItem('Authorization')
    })
  };

   public getToken(): string {
     return localStorage.getItem('Authorization');
   }

  /*HttpClient is available as an injectable class, with methods 
  to perform HTTP requests. */
  constructor(private http: HttpClient) { 
    /*if(localStorage.getItem('Authorization'))
      this.httpOptions.headers = this.httpOptions.headers.append('Authorization', localStorage.getItem('Authorization'));*/
  }

  // private URL = 'http://localhost:8080/ToDo-App/';
      private URL= environment.base_url;

     
  /*A representation of any set of values over any amount of time.
   This is the most basic building block of RxJS*/
  public postService(url, model): Observable<any> {

    console.log(url, model);
    var urlpath = this.URL.concat(url);
    console.log(urlpath);
    return this.http.post<any>(urlpath, model, { observe: 'response'});
  }

  putService(url, model): Observable<any>{

    console.log('testinggg',url,model);
    var urlpath = this.URL.concat(url);
    console.log(urlpath);
    return this.http.put(urlpath, model, this.httpOptions);
  }

  getService(url : string ,model? : any):Observable<any>{
    
    let urlpath=this.URL.concat(url);
    return this.http.get<any>(urlpath,this.httpOptions);
  }

  deleteService(url,model):Observable<any>{

    var urlpath=this.URL.concat(url);
    console.log("Http option",this.httpOptions);
    return this.http.post<any>(urlpath,model,this.httpOptions);
  }


  getUser(url):Observable<CurrentUserResp>{
    
    let urlpath=this.URL.concat(url);
    return this.http.get<CurrentUserResp>(urlpath,this.httpOptions);
  }

  isLoggedIn(): boolean {
    return false;
  }

  putServiceLabel(url){
    var urlpath=this.URL.concat(url);
    console.log(urlpath);
    return this.http.put(urlpath,this.httpOptions);
  }

  deleteServiceLabel(url){
    var urlpath=this.URL.concat(url);
    return this.http.delete(urlpath, this.httpOptions)
  }

  imageUpload(url, model):Observable<any>{
    const fd = new FormData()
    const file = model.event[0]
    fd.append('image', file)
    fd.append('noteId', model.noteId)
    var urlpath=this.URL.concat(url);

    const httpOptions2 = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('Authorization')
      })
    };

    return this.http.post<any>(urlpath, fd, httpOptions2);
  }

  imageDelete(url, model):Observable<any>{
    var urlpath=this.URL.concat(url);
    return this.http.post<any>(urlpath,model,this.httpOptions);
  }

  
  searchData(data : any){
    console.log("in service", data)
    this.searchSubject.next(data);
  }
}
