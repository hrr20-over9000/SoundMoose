import { Component } from '@angular/core';

import { AppState } from '../app.service';

import { AppStore } from '../../../models/appstore.model';
import { Player } from '../../../models/player.model';
import { Store } from '@ngrx/store';
import { PlayerActions } from '../../../actions/player.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'equalizer',
  styleUrls: [ './equalizer.component.css' ],
  templateUrl: './equalizer.component.html'
})

export class EqualizerComponent {
  // wrapperHovered : boolean = false;
  //
  // player$ : Observable<Player>;
  // volume: number;
  // isMuted: boolean;
  // volumeBeforeMute: number;


  constructor (private store$: Store<AppStore>, private playerActions: PlayerActions) {
    // this.player$ = this.store$.select('player');
    // this.player$.subscribe(item => {
    //   this.volume = item.volume;
    //   this.isMuted = item.isMuted;
    //   this.volumeBeforeMute = item.volumeBeforeMute;
    // })
  }

  // private handleMouseOut() {
  //   window.setTimeout(() => { this.wrapperHovered = false; }, 1000);
  // }
  //
  // volumeClickHandler() {
  //   this.store$.dispatch(this.playerActions.volumeMuteToggle(this.volume, this.isMuted));
  // }
  //
  // volumeSlideHandler($event) {
  //   this.volume = $event.value;
  //   this.store$.dispatch(this.playerActions.volumeChange(this.volume, this.isMuted));
  // }
}