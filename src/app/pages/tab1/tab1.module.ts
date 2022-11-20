import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { AudioPlayerComponentModule } from 'src/app/components/audio-player/audio-player.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AudioPlayerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
