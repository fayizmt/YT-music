import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  // styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent{
  @Input() image: string;
  @Input() songName: string;
  @Input() songDesc: string;


}
