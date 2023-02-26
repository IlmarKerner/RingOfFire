import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { collection, Firestore } from 'firebase/firestore';
import { Game } from '../models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
})
export class StartScreenComponent {
  game = new Game();
  constructor(private router: Router, private firestore: AngularFirestore) {}

  newGame() {
    this.firestore
      .collection('games')
      .add(this.game.toJson())// mit dieser Zeile greifen wir auf den firestore zu, und "add"et ein neues JSON
      .then((gameInfo: any) => { // .subscribe kann mehrfach aboniert und aufgerufen werden | .then kann nur einmal aufgerufen werden 
        this.router.navigateByUrl('/game/' + gameInfo.id);
      }); 
  }

  
}
