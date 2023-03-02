import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss'],
})
export class EditPlayerComponent implements OnInit {
  
  allProfilePictures = ['boy.png', 'girl.png', 'monkey.png', 'pinguin.svg'];
  
  ngOnInit(): void {}
  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>,) {}

  closeProfileWindow() {
    this.dialogRef.close();
  }

}
