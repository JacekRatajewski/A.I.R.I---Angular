import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { SessionQuery } from './queries/session.query';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SessionService } from './services/session.service';
import { AuthEps } from './eps/auth.eps';
import { UserEps } from './eps/user.eps';
import { TokenEps } from './eps/token.eps';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
    declarations: [LoginPageComponent, RegisterPageComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ],
    exports: [],
    providers: [
        SessionQuery,
        SessionService,
        CookieService,
        AuthEps,
        UserEps,
        TokenEps
    ],
})
export class AuthModule { }