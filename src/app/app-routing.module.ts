import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: 'full'},
  {path:"login", loadChildren:() => import('./core/login/login.module').then(m => m.LoginModule)},
  {path:"business", loadChildren:() => import('./core/business/business.module').then(m => m.BusinessModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
