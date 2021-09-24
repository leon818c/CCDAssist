import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }
  navigate(menuItem: string){
    this.featureSelected.emit(menuItem);
  }

}
