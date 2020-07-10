import { Observable, of } from 'rxjs';
import { Entity } from './entity';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/auth/models/user.model';
import { StorageService } from '../services/storage.service';

export class Eps<T> {
    source: T[] | Entity[];
    private storageKey: string;
    private storage: StorageService<T[] | Entity[]>;
    constructor(source: T[] | any, storageKey: string, storage: StorageService<T[] | Entity[]>) {
        this.source = source.default != null ? source.default : [];
        this.storageKey = storageKey;
        this.storage = storage;
        this.storage.set(storageKey, this.source);
    }
    getAll(): Observable<T[] | Entity[]> {
        return of(this._get);
    }

    get(index: number): Observable<T | Entity> {
        const entities = this._get as Entity[];
        return of(entities.find(item => item.Id === index))
    }

    save(data: T): Observable<T> {
        const source = this.source as T[];
        source.push(data);
        this.storage.set(this.storageKey, source);
        return of(data);
    }

    remove(id: number): Observable<boolean> {
        let source = this.source as Entity[];
        const entityId = source.findIndex(x => x.Id === id)
        source = source.splice(entityId);
        this.storage.set(this.storageKey, source)
        return of(true);
    }

    private get _get() {
        return this.storage.get(this.storageKey);
    }
}