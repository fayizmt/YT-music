import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { signUpModel } from '../model/signup';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  signupApi = 'http://localhost:8082/signup';  
  loginApi = 'http://localhost:8082/login';   

  signup(data: signUpModel): Observable<any> {
    return this.http.post(this.signupApi, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(this.loginApi, data);
  }
   userLogout(){
        localStorage.clear()
        this.router.navigate([''])
    }
}
