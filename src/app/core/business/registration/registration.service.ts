import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Registration } from './registration-form/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  getRegisteredUsers(){
    return this.http.get(`${environment.Base_URL}club-registration`);
  }

  addRegistration(data: Registration){
    return this.http.post(`${environment.Base_URL}club-registration`,data);
  }

}
