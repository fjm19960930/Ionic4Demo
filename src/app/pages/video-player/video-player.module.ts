import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { IonicModule } from '@ionic/angular';

import { VideoPlayerPage } from './video-player.page';
import {ZComponentsModule} from "../../frame/components/z-components.module";

const routes: Routes = [
  {
    path: '',
    component: VideoPlayerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZComponentsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VideoPlayerPage]
})
export class VideoPlayerPageModule {}
