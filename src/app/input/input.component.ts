import { Component, OnInit, Input } from '@angular/core';
import { FuncService } from '../func.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  // @Input() email : String = 'kum'
  email 

  dat = ''
  des = ''
  tod = ''
  // todoList = []
  constructor(public data : FuncService,private router: ActivatedRoute) { }


  ngOnInit(): void {
    this.email = this.router.snapshot.paramMap.get('id')
    // this.todoList = this.data.todoList
  }

}
