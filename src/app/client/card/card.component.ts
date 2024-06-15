import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  // styleUrls: ['./card1.component.css']  // Uncomment if needed
})
export class CardComponent {
  @Input() miniCard: {
    image: string;
    songName: string;
    artist: string;
    views: string;
  };
}
