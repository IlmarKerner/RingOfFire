import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { StartScreenComponent } from './start-screen/start-screen.component';

const routes: Routes = [
  {path: '', component: StartScreenComponent },
  {path: 'game/:id', component: GameComponent}, // mit dem Doppelpunkt wird die Route als Variable aufgerufen. z.B. URL www.google.de/id
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
