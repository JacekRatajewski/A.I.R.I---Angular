import { of, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Eps } from 'src/app/shared/base/eps';
import { Injectable } from '@angular/core';
import * as users$ from 'src/app/auth/eps/data/whitelist.json';
import { StorageService } from 'src/app/shared/services/storage.service';

@Injectable({
    providedIn: 'root',
  })
export class UserEps extends Eps<User> {
    users: User[];
    constructor(private storageService: StorageService<User[]>) {
        super(users$ as User[], 'USERS', storageService);
        this.users = this.source as User[];
    }

    getByUserName(name: string): Observable<User> {
        return of(this.users.find(u => u.Name === name));
    }


    getByCode(code: number): Observable<User> {
        return of(this.users.find(u => u.Code === code));
    }
}