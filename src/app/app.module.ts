import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ContactComponent} from './contact/contact.component';
import {DemeterSlogComponent} from './demeter-slog/demeter-slog.component';
import {DownloadComponent} from './download/download.component';
import {FeaturesComponent} from './features/features.component';
import {TeamComponent} from './team/team.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './user.service';
import { UsersComponent } from './users/users.component';
import { ComponentsComponent } from './components/components.component';
import {AuthenticationService} from './services/authentication.service';
import {AlertService, UsersService} from './_services';
import { LogedComponent } from './loged/loged.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactComponent,
    DemeterSlogComponent,
    DownloadComponent,
    FeaturesComponent,
    TeamComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    ComponentsComponent,
    LogedComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {
}
