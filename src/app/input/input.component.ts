import { Component, OnInit } from '@angular/core';
import { FuncService } from '../func.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  dat = ''
  des = ''
  tod = ''
  // todoList = []
  constructor(public data : FuncService) { }


  ngOnInit(): void {
    // this.todoList = this.data.todoList
  }

}
