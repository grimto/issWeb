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
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {UserService} from './user.service';

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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {
}
