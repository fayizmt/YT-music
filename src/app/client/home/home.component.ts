import { Component, OnInit } from "@angular/core";
import { MusicServices } from "../services/music.services";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit {
  card: any[] = []; 
  albums : any[] = []; 
  artists: any[] = []; 
  genres = ['Romance', 'Relax', 'Podcasts', 'Feel good', 'Energise', 'Commute', 'Party', 'Work out', 'Sad', 'Focus', 'Sleep', 'Nature'];

  constructor(private musicService: MusicServices) { }

  ngOnInit(): void {
    this.card = this.musicService.card;
    this.albums = this.musicService.albums;
    this.artists= this.musicService.artists; 


  }
}
