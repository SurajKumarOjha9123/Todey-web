import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: String
  password: String
  email: String
  user = {}

  constructor(public http: HttpClient) { }

  CreateUser(name: String, password: String, email: String) {
    this.user = {
      name: name,
      password: password,
      email: email
    }
    this.http.post<any>('http://localhost:3000/create/user', this.user)
      .subscribe(data => {
        console.log(data)
      })
  }

  ngOnInit(): void {
  }

}
