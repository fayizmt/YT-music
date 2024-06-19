import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  
})
export class CardComponent {
  @Input() miniCard: {
    image: string;
    songName: string;
    artist: string;
    views: string;
  };
}
