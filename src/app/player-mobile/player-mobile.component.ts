import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-mobile',
  templateUrl: './player-mobile.component.html',
  styleUrls: ['./player-mobile.component.scss']
})
export class PlayerMobileComponent implements OnInit{
  
  @Input() name;
  @Input() profileImage = 'boy.png';
  @Input() playerActive: boolean = false;

  ngOnInit(): void {
    
  }
}
