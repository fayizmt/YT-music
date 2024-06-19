import {Component, DoCheck} from "@angular/core";

@Component({
    selector: 'side-bar',
    templateUrl: './sideBar.component.html',
 
  })
  export class SideBarComponent implements DoCheck{
    user:any

    ngDoCheck() {
        this.user=localStorage.getItem('user')
      }
  }
  

