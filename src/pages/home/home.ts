import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Game from '../../game/Game';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    console.log('hola');
    const game: Game = new Game();
    game.init();
  }

}
