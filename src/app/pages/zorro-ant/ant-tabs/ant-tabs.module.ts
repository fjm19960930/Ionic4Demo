import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {AntTabsPage} from './ant-tabs.page';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';
import {ZComponentsModule} from '../../../frame/components/z-components.module';

const routes: Routes = [
    {
        path: '',
        component: AntTabsPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NgZorroAntdMobileModule,
        ZComponentsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [AntTabsPage]
})
export class AntTabsPageModule {
}