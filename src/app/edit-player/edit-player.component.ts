import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss'],
})
export class EditPlayerComponent implements OnInit {
  
  allProfilePictures = ['boy.png', 'girl.png', 'monkey.png', 'pinguin.svg'];
  
  ngOnInit(): void {}
  constructor() {}

}
