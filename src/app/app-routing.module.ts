import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ComponentsComponent} from './components/components.component';
import {LogedComponent} from './loged/loged.component';

const route: Routes = [
  {path: '', component: ComponentsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'loged' , component: LogedComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
