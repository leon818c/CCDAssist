import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = false;
  @Output() menuSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  navigate(menuItem: string){
    this.menuSelected.emit(menuItem);
  }


}
