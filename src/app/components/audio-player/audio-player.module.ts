import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AudioPlayerComponent } from './audio-player.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [AudioPlayerComponent],
  exports: [AudioPlayerComponent]
})
export class AudioPlayerComponentModule {}
