import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService<T> {
    set(key: string, data: T) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    get(key: string): T {
        return JSON.parse(localStorage.getItem(key)) as T;
    }
}