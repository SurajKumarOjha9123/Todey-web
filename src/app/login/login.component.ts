import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String
  password: String
  creadential = {}
  result = "vaccant"

  constructor(public http: HttpClient) { }

  Login(email: String, password: String) {
    this.creadential = {
      email: email,
      password: password.toString()
    }
    try {
      this.http.post<any>('http://localhost:3000/login', this.creadential, { observe: 'response' })
        .subscribe(response => {
          response.body != null ? this.result = "Authorised" : this.result = "Unauthorised"
        })
    }
    catch (e) {
      this.result = "Unauthorised"
    }
  }

  ngOnInit(): void {
  }

}
