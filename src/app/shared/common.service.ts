import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  

  constructor(private http:HttpClient) { }
  stu : Student ={
    id: 0,
    name: '',
    marks: 0,
    mobile: 0,
    age: 0,
    address: '',
    course: ''
  }
  url : string= 'http://localhost:3000/student/';
  saveStudentData(student :Student)
  {
console.log('********saveStudent in commonservice :: called******')
console.log(student.id);
console.log(student.name);
console.log(student.marks);
console.log(student.mobile);
console.log(student.age);
console.log(student.address);
return this.http.post<Student>(this.url,student)

}
getAllStudent():Observable<Student[]>{
  return this.http.get<Student[]>(this.url);
}

deleteStudent(id: number) {
  return this.http.delete<Student>(this.url+id)
}

updateStudent(student: Student):Observable<Student> {
  
  return this.http.put<Student>(this.url+student.id,student);
}
}
