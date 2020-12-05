import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FuncService } from '../func.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  listDisplay = []
  tod = ''
  dat = ''
  des = ''
  todoItem;
  constructor(public data: FuncService, public http: HttpClient) {

  }


  ngOnInit(): void {
    // this.List = this.data.todoList

    this.todoItem = {
      "email": "kumarsurajojha6012001@gmail.com"
    }
    this.http.post<any>('http://localhost:3000/display/all', this.todoItem)
      .subscribe(data => {
        this.listDisplay = data
        this.data.todoItem = data
        console.log(data)
      })
  }

}
