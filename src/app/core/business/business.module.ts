import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: BusinessComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BusinessComponent]
})
export class BusinessModule { }
