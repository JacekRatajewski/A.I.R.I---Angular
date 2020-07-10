import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { AiriRoutingModule } from './airi.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [MainComponent],
    imports: [
        CommonModule,
        AiriRoutingModule,
        SharedModule
    ],
    exports: [],
    providers: [],
})
export class AiriModule { }