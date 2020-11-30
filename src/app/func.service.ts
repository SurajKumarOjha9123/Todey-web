import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncService {

  tod = ''
  des = ''
  dat = ''
  todoList = []
  value ;


  AddTodo(todo,description,date){
    this.value = {t : todo,description : description,date : date};
    this.todoList.push(this.value);
    console.log(this.todoList);
  }
  deleteTodo(todo){
    this.todoList = this.todoList.filter((item) => item.t !== todo);
  }
}
