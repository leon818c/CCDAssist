import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import students from '../../data/studentNames4.json'

@Component({
  selector: 'app-randomizeG4',
  templateUrl: './randomize.component.html',
  styleUrls: ['./randomize.component.css']
})
export class RandomizeComponent4 implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  chosenName: string;
  studentNames: {name: string, gender: string}[] = students;
  // [
  //   {name: 'Shelly Thomas', gender: 'm'},
  //   {name: 'Prize Thomas', gender: 'f'},
  //   {name: 'Leon Thomas', gender: 'm'},
  //   {name: 'Livia Thomas',  gender: 'f'},
  //   {name: 'Lianne Thomas', gender: 'f'},
  //   {name: 'Sichu Sebastian', gender: 'm'},
  //   {name: 'Pretty Sebastian', gender: 'f'},
  //   {name: 'Merin Sebastian', gender: 'f'},
  //   {name: 'Erin Sebastian', gender: 'f'},
  //   {name: 'Ethan Sebastian', gender: 'm'},
  //   {name: 'Mummy Thomas', gender: 'f'},
  //   {name: 'Achachan Thomas', gender: 'm'}
  // ];
  selectedNames: string[] = [];
  
  namesCopy: {name: string, gender: string}[] = [];
  
  
  constructor() {}

  shuffle(){
      var currentIndex = this.namesCopy.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = this.namesCopy[currentIndex];
        this.namesCopy[currentIndex] = this.namesCopy[randomIndex];
        this.namesCopy[randomIndex] = temporaryValue;
      }

      this.chosenName = this.namesCopy.pop().name;
      this.selectedNames.push(this.chosenName);

  }  
  reload(){
    this.selectedNames = [];
    this.namesCopy = this.studentNames.slice();
  }
  ngOnInit() {
    this.studentNames.sort((a,b) => (a.name>b.name)?1:-1);
    this.namesCopy = this.studentNames.slice();
  }

  onNavigate(menuItem: string){
    this.featureSelected.emit(menuItem);
  }
}






/********************************/




   

