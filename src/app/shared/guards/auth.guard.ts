import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionQuery } from 'src/app/auth/queries/session.query';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private sesionQ: SessionQuery, private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        this.sesionQ.IS_LOGGED_IN$.subscribe(res => {
            if (!res) {
                this.router.navigate(['auth', 'signIn']);
                return false;
            }
        })
        return true;
    }
}