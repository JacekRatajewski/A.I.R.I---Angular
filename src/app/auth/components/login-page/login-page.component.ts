import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { SignInCommand } from '../../models/commands/sign-in.command';
import { SessionService } from '../../services/session.service';
import { SignInResponse } from 'src/app/shared/models/response.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private sessionService: SessionService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      Code: [0],
      Password: ['']
    })
  }

  auth() {
    const command = this.loginForm.value as SignInCommand;
    this.sessionService.signIn(command).subscribe(res => {
      if (res == SignInResponse.SessionAllowed) {
        this.router.navigate(['airi']);
      }
    });
  }

}
