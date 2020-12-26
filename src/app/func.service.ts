import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FuncService {

  tod = ''
  des = ''
  dat = ''
  noOfDaysPassed 
  public todoList = []

  todoItem: object;

  constructor(private http: HttpClient, public router : Router) { }

  AddTodo(todo: String, description: String, email : String) {
    console.log("add email : ",email)
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var today1 = mm + '/' + dd + '/' + yyyy;
    this.todoItem = {
      "email": email,
      "todo": todo,
      "description": description,
      "date": today1
    }
    console.log(this.todoItem)
    this.http.post<any>("http://localhost:3000/create/task", this.todoItem, {observe: 'response'})
      .subscribe(response => {
        if(response.body.res==="ok"){
          alert("Successfully Added❤")
        }
      })
  }
  deleteTodo(todo: String, description: String,email:String) {
    this.todoItem = {
      "todo": todo,
      "description": description,
      "email": email
    }
    this.http.post<any>('http://localhost:3000/delete/todo', this.todoItem)
      .subscribe(data => {
        this.todoList = data
        console.log(data)
      })
  }

  getList(email: String) {
    // console.log("here email : ",email)
    //   this.router.navigate(['/display',email])
  }

  Newest(email:String) {
    this.todoItem = {
      "email" : email
    }
    this.http.post<any>('http://localhost:3000/display/all/desc', this.todoItem)
      .subscribe(data => {
        this.todoList = data
        console.log(data)
      })
  }

  Oldest(email:String) {
    this.http.post<any>('http://localhost:3000/display/all/inc', this.todoItem)
      .subscribe(data => {
        this.todoList = data
        console.log(data)
      })
  }

}


