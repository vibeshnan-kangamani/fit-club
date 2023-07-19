import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../../login/login.service';
import { Registration } from './register.model';
import { RegistrationService } from '../registration.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  @ViewChild("registrationForm") register: NgForm;
  displayedColumns: string[] = ['name', 'address', 'email', 'activity'];
  dataSource: any = new MatTableDataSource([]);

  powers = ['GYM', 'Yoga',
            'Aerobics', 'Crossfit'];

  model: Registration = new Registration();


  constructor(public loginService: LoginService,
    private registrationService: RegistrationService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getRegistration();
  }


  onSubmit(data: any) {
    console.log(data);
    this.registrationService.addRegistration(data).subscribe(res =>{
      console.log(res);
      this.snackBar.open("Registered Successfully","Ok");
      this.getRegistration();
      this.register.reset();
    })
  }

  getRegistration(){
    this.registrationService.getRegisteredUsers().subscribe((res: Registration[])=>{
      console.log(res); 
      this.dataSource = new MatTableDataSource<Registration>(res);     
    })
  }

}
