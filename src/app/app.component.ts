import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CCDAssist';
  loadedFeature = 'H';
  onNavigate(navigateTo: string){
    this.loadedFeature = navigateTo;
  }
}
