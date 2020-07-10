import { SessionStore, Session } from 'src/app/stores/session.store';
import { AuthEps } from '../eps/auth.eps';
import { tap, map, switchMap } from 'rxjs/operators';
import { SignInCommand } from '../models/commands/sign-in.command';
import { SignUpCommand } from '../models/commands/sign-up.command';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Token } from '../models/token.model';
import { SignInResponse } from 'src/app/shared/models/response.models';

@Injectable({
    providedIn: 'root',
  })
export class SessionService {
    constructor(private __session: SessionStore, private authEps: AuthEps) { }

    signIn(command: SignInCommand): Observable<SignInResponse> {
        return this.authEps.authenticate(command).pipe(
            switchMap(sessionToken => {
                if (sessionToken) {
                    this.__session.update({ token: sessionToken });
                    return of(SignInResponse.SessionAllowed);
                } else {
                    return of(SignInResponse.SessionRefused);
                }
            })
        );
    }
    //this.__session.update({ token: sessionToken })
    signUp(command: SignUpCommand): Observable<number> {
        return this.authEps.registration(command).pipe(
            map(res => {
                if (res != null) {
                    return (res.value as User).Code;
                }
                return null;
            })
        );
    }

    signOut() {
        this.__session.reset();
    }
}