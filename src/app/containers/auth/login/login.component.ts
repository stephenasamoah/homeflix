import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../api/_models/user.model';

@Component({
  selector: 'hf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.createForm(this.user);
  }

  ngOnInit() {
  }

  private createForm(user?: User) {
    user = user || <User>{};
    return this.fb.group({
      email: [user.email, Validators.required],
      password: [user.password, Validators.required]
    });
  }
}
