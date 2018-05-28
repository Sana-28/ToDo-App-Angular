import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';//defines route for differnt link
import { MaterialModule} from './material.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { HomeComponent } from './component/home/home.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { NoteListComponent } from './component/notes/note.list.component';
import { TrashComponent } from './component/trash/trash.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { LabelComponent } from './component/label/label.component';
import { NotedisplayComponent } from './component/notedisplay/notedisplay.component';
import { CollaboratorComponent } from './component/collaborator/collaborator.component';
import { UpdateNoteComponent } from './component/update-note/update-note.component';
import { ErrorComponent } from './component/error/error.component';
import { UpdatelabelComponent } from './component/updatelabel/updatelabel.component';


import { UserService } from './service/user.service';
import { LoginService } from './service/login.service';
import { RegisterService } from './service/register.service';
import { NoteService } from './service/note.service';
import { LabelService } from './service/label.service';
import { CollaboratorService } from './service/collaborator.service';

import { NoteFilterPipe } from './filter/notefilter.pipe';
import { TokenInterceptor } from './service/tokeninterceptor';
import { AuthGuard, LoginAuthGuard} from './authguard/auth.guard';
import { ToolbarDirective } from './directive/toolbar.directive';
import { SearchFilterPipe } from './filter/search-filter.pipe';
import { LabelnotePipe } from './filter/labelnote.pipe';
import { LabelnoteComponent } from './component/labelnote/labelnote.component';

const routes: Routes = [
  //{path:'register',component:RegisterComponent}
];
 
@NgModule({
  declarations: [
    AppComponent,
    CollaboratorComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent,
    HomeComponent,
    ResetpasswordComponent,
    NoteListComponent,
    TrashComponent,
    ArchiveComponent,
    ReminderComponent,
    LabelComponent,
    NotedisplayComponent,
    UpdateNoteComponent, 
    ErrorComponent,
    UpdatelabelComponent,
    LabelnoteComponent,

    NoteFilterPipe,
    SearchFilterPipe,
    LabelnotePipe,

    ToolbarDirective,
    ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    
  ],

 entryComponents:[LabelComponent,
                    CollaboratorComponent,
                      UpdateNoteComponent,
                        UpdatelabelComponent
                        ],

  providers: [UserService,
              LoginService,
               RegisterService,
                 NoteService,
                  LabelService, 
                   CollaboratorService,
                    AuthGuard, 
                     LoginAuthGuard,

                      {
                        provide: HTTP_INTERCEPTORS,
                        useClass: TokenInterceptor,
                        multi: true
                    } 
                  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
