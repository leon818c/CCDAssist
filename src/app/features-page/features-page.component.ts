import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-features-page',
  templateUrl: './features-page.component.html',
  styleUrls: ['./features-page.component.css']
})
export class FeaturesPageComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  navigate(menuItem: string){
    this.featureSelected.emit(menuItem);
  }
}
