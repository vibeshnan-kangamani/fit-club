import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationComponent } from './registration/registration.component';
import { AboutUsComponent } from './about-us/about-us.component';

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
        path: "register",
        component: RegistrationComponent
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
    SharedModule
  ],
  declarations: [BusinessComponent]
})
export class BusinessModule { }
