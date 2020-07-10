import { UserEps } from './user.eps';
import { User } from '../models/user.model';
import { TokenEps } from './token.eps';
import { switchMap, tap, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Token } from '../models/token.model';
import { SignInCommand } from '../models/commands/sign-in.command';
import { SignUpCommand } from '../models/commands/sign-up.command';
import { Injectable } from '@angular/core';
import { Guid } from "guid-typescript";
import * as bcrypt from 'bcryptjs';

@Injectable({
    providedIn: 'root',
})
export class AuthEps {
    constructor(private userEps: UserEps, private tokenEps: TokenEps<User>) { }
    authenticate(signInCommand: SignInCommand): Observable<Token> {
        return this.userEps.getByCode(signInCommand.Code).pipe(
            switchMap(
                user => {
                    if (user) {
                        var verifyHash = this.hash(user.Salt, signInCommand.Password);
                        if (verifyHash === user.Hash) {
                            let sessionToken = this.tokenEps.encode(user, Guid.create());
                            return of(sessionToken);
                        }
                    } else {
                        return of(null);
                    }
                }
            ));
    }

    registration(signUpCommand: SignUpCommand): Observable<any> {
        if (signUpCommand.Name.length > 14) {
            return of(null);
        }
        if (signUpCommand.Password != signUpCommand.RePassword) {
            return of(null);
        }
        return this.userEps.getAll().pipe(
            map(users => {
                const _users = users as User[];
                if (_users.find(x => x.Name == signUpCommand.Name) == null) {
                    const salt = this.salt();
                    const hash = this.hash(salt, signUpCommand.Password);
                    const code = this.code(signUpCommand.Name);
                    const user = new User(code, signUpCommand.Name, hash, salt);
                    return this.userEps.save(user).pipe(res => {
                        return res;
                    })
                }
            })
        )
    }

    private hash(salt: string, password: string): string {
        return bcrypt.hashSync(password, salt);
    }

    private salt(): string {
        return bcrypt.genSaltSync(5);
    }

    private code(userName: string): number {
        let code = "";
        userName.split('').forEach(letter => {
            code += letter.charCodeAt(0);
        });
        return parseInt(code);
    }
}