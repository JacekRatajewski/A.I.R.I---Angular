import { Token } from '../models/token.model';
import { Injector, InjectionToken, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Guid } from 'guid-typescript';

@Injectable({
    providedIn: 'root',
})
export class TokenEps<T> {
    constructor(private cookies: CookieService) { }
    encode(data: T, guid: Guid): Token {
        this.cookies.set(guid.toString(), JSON.stringify(data));
        return new Token(guid);
    }

    decode(token: Token, key: string): T {
        return JSON.parse(this.cookies.get(key)) as T;
    }
}