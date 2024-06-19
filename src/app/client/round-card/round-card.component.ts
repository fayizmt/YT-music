import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-round-card',
  templateUrl: './round-card.component.html',
  styleUrls: ['./round-card.component.css']
})
export class RoundCardComponent implements OnInit{
  @Input()
  image:string;

   @Input()
  artistName:string;

   @Input()
  songDesc:string;

  ngOnInit(): void {
    
  }

}
