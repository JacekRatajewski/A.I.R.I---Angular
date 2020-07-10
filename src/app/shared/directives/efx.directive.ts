import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[efx]',
})
export class EfxDirective {
    @Input() efx: string;
    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        this.renderer.addClass(this.el.nativeElement, `efx-${this.efx}`);
    }
}