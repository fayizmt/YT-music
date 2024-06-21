import {Component,DoCheck} from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'] 
  })
  export class HeaderComponent implements DoCheck{
    user:any

    ngDoCheck() {
        this.user=localStorage.getItem('user')
      }
    
}
  

