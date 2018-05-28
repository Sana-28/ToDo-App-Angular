/*Angular 5 component is made up of two main sections,
  namely the class and the component decorator function 
  prefix with @ metadata */

import { Component } from '@angular/core';

/*decorator is “a function that adds metadata to a class, 
  its members (properties, methods) and function arguments.” 
  And “the metadata object describes how the HTML template
  and component class work together.” */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*Getting and posting data using Observable */
  title = 'app';
}
