/**Purpose:This is routing module contains path of every component to be routed
 * @author: SANA SHAIKh
 * @since: 9/April/2018
 */

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { NoteListComponent } from './component/notes/note.list.component';
import { TrashComponent } from './component/trash/trash.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { ErrorComponent } from './component/error/error.component';
import { LabelnoteComponent } from './component/labelnote/labelnote.component';

import { AuthGuard } from './authguard/auth.guard';
import { LoginAuthGuard } from './authguard/auth.guard';
//import { OnlyLoggedInUsersGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'createnotes', pathMatch: 'full' },
      { path: 'createnotes', component: NoteListComponent },
      { path: 'trash', component:TrashComponent },
      { path: 'archive', component:ArchiveComponent },
      { path: 'reminder', component:ReminderComponent },
      { path: 'labelnote/:id', component:LabelnoteComponent },
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent,canActivate: [LoginAuthGuard]},
  { path: 'forgetpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword' , component: ResetpasswordComponent },
  { path: 'errorpage' ,component: ErrorComponent}

  // { path: 'createnotes', component: NotesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: `reload`})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
