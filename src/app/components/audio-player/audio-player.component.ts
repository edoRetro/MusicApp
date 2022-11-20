import { Component, Input, OnInit } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {

  @Input() coverUrl: string = '';
  @Input() songName: string = '';
  @Input() author: string = '';
  @Input() songUrl: string = '';

  currentPlayingFile: MediaObject;
  volume: number = 0.5;
  favorite: boolean = false;

  constructor(private media: Media) { }

  ngOnInit() {
    this.currentPlayingFile = this.media.create(this.songUrl);
  }

  play() {        
    this.currentPlayingFile.play();
  }

  pause() {        
    this.currentPlayingFile.pause();
  }

  markAsFavorite() {
    this.favorite = true;
  }

  setVolume(ev: Event) {    
    const actualVolume: number = (ev as RangeCustomEvent).detail.value as number;    
    this.currentPlayingFile.setVolume(actualVolume / 100);
  }

}
