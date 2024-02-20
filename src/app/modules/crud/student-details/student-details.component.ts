import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  stulist : Student[]=[];
  constructor(public cs :CommonService){
    this.cs.getAllStudent().subscribe((data : Student[])=>{
    this.stulist=data;
    })
  }
  deleteStudent(id :number)
  {
    console.log('deleteStudent :: called'+id)
    this.cs.deleteStudent(id).subscribe();
    window.location.reload();
  }
  updateStudent(student : Student){
    
   this.cs.stu=student;
  }

}
