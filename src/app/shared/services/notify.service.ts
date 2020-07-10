import { Injectable, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NotifyService<T, R> {
    @ViewChild('ov-container') OvContainer: ElementRef;
    private readonly OVERLAY_ID: string = "ov-container";
    constructor(private renderer: Renderer2) {

    }
    pop(msg: string, type, duration?, still?: boolean, onClick?: () => Observable<R>) {

    }
}