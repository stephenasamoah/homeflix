import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeflixUiModule } from '../../ui/ui.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeflixUiModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
