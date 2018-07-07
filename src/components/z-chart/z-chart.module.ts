import { NgModule } from '@angular/core';
import { ZChartComponent } from './z-chart';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        ZChartComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ZChartComponent,
    ]
})
export class ZChartModule { }
