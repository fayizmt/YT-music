import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {
  @Input()
  subTitle:string=''

  @Input()
  mainTitle:string='sample main title'

  @Input()
  buttonTitle:string='Play all'

  @Input()
  scrollClass:string=''
  addClass:string=''

  ngOnInit(): void {
    
  }
}