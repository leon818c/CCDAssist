import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import studentNames from '../data/studentNames.json';
@Component({
  selector: 'app-grouping',
  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.css']
})
export class GroupingComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  names: {name: string, gender: string}[] = studentNames;
  namesCopy: {name: string, gender: string}[] = [];
  splitArray1: {name: string, gender: string}[] = [];
  splitArray2: {name: string, gender: string}[] = [];
  splitArray3: {name: string, gender: string}[] = [];
  splitArray4: {name: string, gender: string}[] = [];
  splitArray5: {name: string, gender: string}[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  initArrays(){
    this.splitArray1 = [];
    this.splitArray2 = [];
    this.splitArray3 = [];
    this.splitArray4 = [];
    this.splitArray5 = [];
  }

  groupByName(gsize: string){
    this.initArrays();
    this.shuffle();
    var groupSize = parseInt(gsize, 10);
    if(groupSize > 0){
      var size = this.namesCopy.length/groupSize;
      this.chunkArray(this.namesCopy, size);
    }
  }

  chunkArray(myArray, chunkSize){
    var index = 0;
    var arrayLength = myArray.length;
    var myChunk: {name: string, gender: string}[] = [];
    var ind = 0;
    for(index = 0; index < arrayLength;index += chunkSize){
      myChunk = myArray.slice(index, index + chunkSize);
    
      switch(ind){
        case 0: 
          this.splitArray1 = myChunk;
          break;
        case 1: 
          this.splitArray2 = myChunk;
          break;
        case 2: 
          this.splitArray3 = myChunk;
          break;
        case 3: 
          this.splitArray4 = myChunk;
          break;
        case 4: 
          this.splitArray5 = myChunk;
          break;
      }
      ind++;
    }

  }

  shuffle(){
    this.namesCopy = this.names.slice();
    var currentIndex = this.namesCopy.length, temporaryValue, randomIndex;
    while(0 !== currentIndex)
    {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.namesCopy[currentIndex];
      this.namesCopy[currentIndex] = this.namesCopy[randomIndex];
      this.namesCopy[randomIndex] = temporaryValue;
    }
  }

  groupByGender(){
    this.initArrays();
    this.splitArray1 = this.names.filter((Name) => Name.gender === 'm');
    this.splitArray2 = this.names.filter((Name) => Name.gender === 'f');

  }
  onNavigate(menuItem: string){
    console.log(menuItem);
    this.featureSelected.emit(menuItem);
  }
}
