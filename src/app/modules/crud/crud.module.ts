import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentRegistrationComponent,
    StudentDetailsComponent
  ],
  exports: [
    StudentRegistrationComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CrudModule { }
