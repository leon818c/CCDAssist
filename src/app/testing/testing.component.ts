import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
  
})
export class TestingComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  
  navigate(menuItem: string){
    console.log(menuItem);
    this.featureSelected.emit(menuItem);
  }
}
