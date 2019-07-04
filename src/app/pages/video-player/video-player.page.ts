import { Component, OnInit, ViewChild } from '@angular/core';
import {VgMedia, BitrateOption} from '_videogular2@6.4.0@videogular2/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.page.html',
  styleUrls: ['./video-player.page.scss'],
})
export class VideoPlayerPage implements OnInit {

    @ViewChild('myMedia') myMedia: VgMedia;
    videoPath:string;
    videoQuality1: BitrateOption = {
        qualityIndex: 720,
        width: 500,
        height: 300,
        bitrate: 1,
        mediaType: "video/mp4",
        label: "高清",
    };
    videoQuality2: BitrateOption = {
        qualityIndex: 960,
        width: 500,
        height: 300,
        bitrate: 1,
        mediaType: "video/mp4",
        label: "超清",
    };
    dashBitrates:Array<BitrateOption> = [];
    constructor() {
    }
    ngOnInit() {
        this.videoPath = "assets/demo.mp4";
        this.dashBitrates.push(this.videoQuality1, this.videoQuality2);
    }
}
