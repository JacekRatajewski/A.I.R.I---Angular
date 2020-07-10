import { AuthLevel } from './roles.model';
import { Entity } from 'src/app/shared/base/entity';

export class User extends Entity {
    constructor(code, name, hash, salt, role?) {
        super();
        this.Code = code;
        this.Name = name;
        this.Hash = hash;
        this.Salt = salt;
        this.Role = AuthLevel.Regular;
    }
    Code: number;
    Name: string;
    Hash: string;
    Salt: string;
    Role: AuthLevel
}