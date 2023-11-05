import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/store/reducers/user.reducer';
import { login } from '../../store/actions/user.actions';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<UserState>,private router: Router) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const user:User = { userName: this.loginForm.value.userName,
        password: this.loginForm.value.password          
      };
      this.store.dispatch(login({user}));
      this.router.navigate(['/']);
    }
  }
}
