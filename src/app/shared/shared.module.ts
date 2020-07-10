import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EfxDirective } from './directives/efx.directive';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
    declarations: [
        EfxDirective
    ],
    imports: [CommonModule],
    exports: [
        EfxDirective
    ],
    providers: [AuthGuard],
})
export class SharedModule { }