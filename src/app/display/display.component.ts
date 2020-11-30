import { Component, OnInit } from '@angular/core';
import { FuncService } from '../func.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  List = []
  tod = ''
  dat = ''
  des = ''
  constructor(public data :FuncService) { }

  

  ngOnInit(): void {
    this.List = this.data.todoList
  }

}
