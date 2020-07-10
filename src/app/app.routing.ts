import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { AiriModule } from './airi/airi.module';
import { AuthGuard } from './shared/guards/auth.guard';
import { RegisterPageComponent } from './auth/components/register-page/register-page.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: '',
    component: <any>AppComponent,
    children: [
      {
        path: '',
        redirectTo: '/airi',
        pathMatch: 'full'
      },
      {
        path: 'airi',
        loadChildren: () => AiriModule,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
