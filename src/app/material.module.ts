/**Purpose:This is material module contains all APIS's needed to implement different
 * modules i.e. registrationForm,loginForm,toolBar,navBar
 * 
 * @author: SANA SHAIKh
 * @since: 9/April/2018
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule(
    {
        imports:[
            FormsModule,
            FlexLayoutModule,

            MatButtonModule,
            MatToolbarModule,
            MatInputModule,
            MatCardModule, 
            MatDatepickerModule,
            MatNativeDateModule,
            MatFormFieldModule,
            MatIconModule,
            MatMenuModule,
            MatSidenavModule,
            MatDialogModule,
            MatSelectModule,
            MatChipsModule,
            MatCheckboxModule,
            ReactiveFormsModule
        ],
            
        exports:[
            FlexLayoutModule,
            FormsModule,

            MatButtonModule,
            MatToolbarModule,
            MatCardModule,
            MatInputModule,
            MatFormFieldModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatIconModule,
            MatMenuModule,
            MatSidenavModule,
            MatDialogModule,
            MatSelectModule,
            MatChipsModule,
            MatCheckboxModule,
        
            ReactiveFormsModule
        ],
    }
)

export class MaterialModule{}