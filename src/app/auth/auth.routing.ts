import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/signIn' },
    { path: 'signIn', component: LoginPageComponent },
    { path: 'signUp', component: RegisterPageComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
