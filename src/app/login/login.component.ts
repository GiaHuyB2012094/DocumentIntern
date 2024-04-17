import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(
    private authServer: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ){}

  login() {
    let user = this.authServer.login(
      this.form.value.username,
      this.form.value.password,
    );
    
    if (!user) {
      alert(user)
    } else {
      this.router.navigateByUrl('/admin');
    }
  }
}
