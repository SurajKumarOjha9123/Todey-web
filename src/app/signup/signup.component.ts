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
  result = false;

  constructor(public http: HttpClient) { }

  CreateUser(name: String, password: String, email: String) {
    this.user = {
      name: name,
      password: password,
      email: email
    }
    this.http.post<any>('http://localhost:3000/create/user', this.user, { observe: 'response' })
      .subscribe(response => {
        if(response.body.res==="notok"){
          alert("Account alredy exist😅")
        }else{
          alert("Account created successfully😍")
        }
      })
  }

  ngOnInit(): void {
  }

}
