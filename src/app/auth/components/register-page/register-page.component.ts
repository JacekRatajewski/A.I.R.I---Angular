import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { SignUpCommand } from '../../models/commands/sign-up.command';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup;
  userCode: number;
  constructor(private sessionService: SessionService, private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      Name: [''],
      Password: [''],
      RePassword: ['']
    })
  }

  register() {
    const command = this.registerForm.value as SignUpCommand;
    this.sessionService.signUp(command).subscribe(res => {
      this.userCode = res;
    });
  }

}
