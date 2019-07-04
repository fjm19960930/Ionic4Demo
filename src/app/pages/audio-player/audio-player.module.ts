import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AudioPlayerPage } from './audio-player.page';
import {ZComponentsModule} from "../../frame/components/z-components.module";

const routes: Routes = [
  {
    path: '',
    component: AudioPlayerPage
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
  declarations: [AudioPlayerPage]
})
export class AudioPlayerPageModule {}
