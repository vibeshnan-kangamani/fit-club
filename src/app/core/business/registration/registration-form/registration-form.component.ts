import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../login/login.service';

export class Hero {

  public id: number;
    public name: string;
    public address: string;
    public email: string;
    public activity?: string
  constructor(
    public Id?: number,
    public Name?: string,
    public Address?: string,
    public Email?: string,
    public Activity?: string
  ) {
    this.id = Id;
    this.name = Name;
    this.address = Address;
    this.email = Email;
    this.activity = Activity;
   }

}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model: Hero = new Hero();


  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }


  onSubmit(data: any) {  }

  newRegister(){

  }

}
