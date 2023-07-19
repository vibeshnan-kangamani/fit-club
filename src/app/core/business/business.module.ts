import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationComponent } from './registration/registration.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegistrationFormComponent } from './registration/registration-form/registration-form.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  { path: "", component: BusinessComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path:"home",
        component: HomeComponent
      },
      {
        path: "register-form",
        component: RegistrationFormComponent
      },
      {
        path: "register/:id",
        component: RegistrationComponent
      },
      {
        path: "about-us",
        component: AboutUsComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    MatSnackBarModule
  ],
  declarations: [BusinessComponent,RegistrationFormComponent,RegistrationComponent]
})
export class BusinessModule { }
