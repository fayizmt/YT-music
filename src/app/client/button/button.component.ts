import { Component, Input } from '@angular/core';
import { ButtonService } from '../services/user.service'; 
import { UserService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() url: string = '/';
  @Input() title: string = '';
  @Input() style: string = '';
  @Input() icon: string = '';

  constructor(
    private buttonService: ButtonService,
    private userService:UserService,
    private router: Router 
  ) { }

  onButtonClick(): void {
    if (this.url === '/logout') {
      this.userService.userLogout();
    } else {
      this.router.navigate([this.url]); 
    }
  }
}
