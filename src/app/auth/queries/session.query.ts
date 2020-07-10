import { SessionStore, Session } from 'src/app/stores/session.store';
import { Query } from '@datorama/akita';
import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root',
})
export class SessionQuery extends Query<Session> {
    USER: User = this.getUser()
    IS_LOGGED_IN$ = this.select(session => !!session.token);
    constructor(protected __store: SessionStore, private cookies: CookieService) {
        super(__store)
    }

    private getUser() {
        const session = this.getValue();
        if (session.token != null) {
            return JSON.parse(this.cookies.get(session.token.CookieGuid.toString())) as User;
        }
        return null;
    }
}