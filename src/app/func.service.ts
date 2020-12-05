import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncService {

  tod = ''
  des = ''
  dat = ''
  public todoList = []
  email = 'kumarsurajojha6012001@gmail.com'

  todoItem: object;

  constructor(private http: HttpClient) { }

  AddTodo(todo: String, description: String, date) {
    this.todoItem = {
      "email": this.email,
      "todo": todo,
      "description": description,
      "date": date
    }
    this.http.post<any>("http://localhost:3000/create/task", this.todoItem)
      .subscribe(data => {
        this.todoList = data
        console.log('successfully added')
      })
  }
  deleteTodo(todo: String, description: String) {
    this.todoItem = {
      "todo": todo,
      "description": description,
      "email": "kumarsurajojha6012001@gmail.com"
    }
    this.http.post<any>('http://localhost:3000/delete/todo', this.todoItem)
      .subscribe(data => {
        this.todoList = data
        console.log(data)
      })
  }

  getList() {
    this.todoItem = {
      "email": "kumarsurajojha6012001@gmail.com"
    }
    this.http.post<any>('http://localhost:3000/delete/todo', this.todoItem)
      .subscribe(data => {
        this.todoList = data
      })
  }


}


