import { Component, Input } from '@angular/core';
import { ButtonService } from '../services/user.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
//   styleUrls: ['./button.component.css'] // Uncomment if you have styles
})
export class ButtonComponent {
  @Input() 
   url: string='/'

  @Input()
    title:string=''

  @Input()
    style:string=''

  @Input()
    icon:string=''
    constructor(private buttonService: ButtonService) { }

  onButtonClick(): void {
    this.buttonService.navigateTo(this.url);  // Navigate to the URL using the service
  }
}