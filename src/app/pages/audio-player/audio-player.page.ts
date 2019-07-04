import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.page.html',
  styleUrls: ['./audio-player.page.scss'],
})
export class AudioPlayerPage implements OnInit {
    myAudio;
    constructor() {
    }

    ngOnInit() {
        this.myAudio = document.getElementById('myaudio');
    }

    ionViewDidEnter() {
    }

    musicStart() {
        this.myAudio.play();
    }
    musicStop() {
        this.myAudio.pause();
    }
    musicReplay() {
        this.myAudio.load();
        this.myAudio.play();
    }
}
