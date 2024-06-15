import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
//   styleUrls: ['./button.component.css'] // Uncomment if you have styles
})
export class ButtonTemplateComponent {
  @Input()
    title:string=''

    @Input()
    style:string=""

    @Input()
    icon:string=''
}