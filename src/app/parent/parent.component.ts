import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    contextmenu = false;
      contextmenuX = 0;
      contextmenuY = 0;

      //activates the menu with the coordinates
      onrightClick(event){
          this.contextmenuX=event.clientX
          this.contextmenuY=event.clientY
          this.contextmenu=true;
      }
      //disables the menu
      disableContextMenu(){
         this.contextmenu= false;
      }

}


