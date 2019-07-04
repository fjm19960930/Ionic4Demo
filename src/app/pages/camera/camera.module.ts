import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CameraPage } from './camera.page';
import {ZComponentsModule} from "../../frame/components/z-components.module";

const routes: Routes = [
  {
    path: '',
    component: CameraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CameraPage]
})
export class CameraPageModule {}
