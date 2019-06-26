import { Component, OnInit, ViewChild } from '@angular/core';
import {VgMedia} from '_videogular2@6.4.0@videogular2/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.page.html',
  styleUrls: ['./video-player.page.scss'],
})
export class VideoPlayerPage implements OnInit {

    @ViewChild('myMedia') myMedia: VgMedia;
      constructor() { }

      ngOnInit() {
      }

}
