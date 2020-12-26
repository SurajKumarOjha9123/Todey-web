import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  email: String;
  constructor(public data: FuncService, public http: HttpClient, public router : ActivatedRoute, public route : Router) {

  }

  back(){
    this.route.navigate(['/add',this.email])
  }


  ngOnInit(): void {
    this.email = this.router.snapshot.paramMap.get('id')
    console.log("ngOninit",this.email)
    this.todoItem = {
      "email": this.email
    }
    this.http.post<any>('http://localhost:3000/display/all', this.todoItem)
      .subscribe(data => {
        this.data.todoList = data
      })
  }

}
