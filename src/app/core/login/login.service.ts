import { Injectable } from '@angular/core';
import { Login, LoginDetails } from './login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser: LoginDetails = new LoginDetails();
  httpHeaders = new HttpHeaders({'Content-Type':  'application/json'});
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',

    })
  }

  constructor(private http: HttpClient ) { }

  login(value: Login){
    return this.http.post(`${environment.Base_URL}login`,value,this.httpOptions );
  }

}
