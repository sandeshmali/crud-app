import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {

  student : Student={
    id: 0,
    name: '',
    marks: 0,
    mobile: 0,
    age: 0,
    address: '',
    course: ''
  }
constructor(public cs: CommonService) {}
  
  saveStudent(student:Student)
  {
    console.log(student.name)
  if(student.id==0)
this.cs.saveStudentData(student).subscribe();
else
this.cs.updateStudent(student).subscribe();

window.location.reload();
  }
reset(){
  this.cs.stu=this.student;
}
}
