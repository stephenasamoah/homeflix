import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../api/_models/user.model';

@Component({
  selector: 'hf-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.createForm(this.user);
  }

  ngOnInit() {
  }

  private createForm(user?: User) {
    user = user || <User>{};

    return this.fb.group({
      full_name: this.fb.control(user.full_name, {
        validators: [Validators.required]
      }),
      email: this.fb.control(user.email, {
        validators: [Validators.required, Validators.email]
      }),
      password: this.fb.control(user.password, {
        validators: [Validators.required, Validators.minLength(8)]
      }),
    });
  }
}
