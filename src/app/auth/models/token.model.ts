import { Entity } from 'src/app/shared/base/entity';
import { Injector } from '@angular/core';
import { Guid } from 'guid-typescript';

export class Token extends Entity {
    constructor(cookieGuid: Guid) {
        super();
        this.CookieGuid = cookieGuid;
    }
    CookieGuid: Guid;
}