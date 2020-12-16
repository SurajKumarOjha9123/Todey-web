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
  public todoList = []

  todoItem: object;

  constructor(private http: HttpClient, public router : Router) { }

  AddTodo(todo: String, description: String, date, email : String) {
    this.todoItem = {
      "email": email,
      "todo": todo,
      "description": description,
      "date": date
    }
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
      this.router.navigate(['/display',email])
  }


}


