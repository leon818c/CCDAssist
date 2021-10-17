import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import studentNames from '../../data/studentNames.json';
import group1 from '../../data/group1.json';
import group2 from '../../data/group2.json';
import group3 from '../../data/group3.json';
import group4 from '../../data/group4.json';
import group5 from '../../data/group5.json';

@Component({
  selector: 'app-groupingG8',
  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.css']
})
export class GroupingComponent8 implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  names: {name: string, gender: string}[] = studentNames;
  namesCopy: {name: string, gender: string}[] = [];
  /*splitArray1: {name: string, gender: string}[] = [];
  splitArray2: {name: string, gender: string}[] = [];
  splitArray3: {name: string, gender: string}[] = [];
  splitArray4: {name: string, gender: string}[] = [];
  splitArray5: {name: string, gender: string}[] = [];*/

  splitArray1: {name: string, gender: string}[] = group1;
  splitArray2: {name: string, gender: string}[] = group2;
  splitArray3: {name: string, gender: string}[] = group3;
  splitArray4: {name: string, gender: string}[] = group4;
  splitArray5: {name: string, gender: string}[] = group5;

  //scores
  score1: number=100;
  score2: number=100;
  score3: number=200;
  score4: number=200;
  score5: number=200;
  
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

  Navigate(menuItem: string){
    //console.log(menuItem);
    this.featureSelected.emit(menuItem);
  }
  incrementScore(num:number, scoreVal: string){
    switch(num){
      case 1:
        this.score1 = this.score1 + parseInt(scoreVal);
        break;
      case 2:
        this.score2 = this.score2 + parseInt(scoreVal);
        break;
      case 3:
        this.score3 = this.score3 + parseInt(scoreVal);
        break;
      case 4:
        this.score4 = this.score4 + parseInt(scoreVal);
        break;
      case 5:
        this.score5 = this.score5 + parseInt(scoreVal);
        break;
      }
  }
  decrementScore(num: number, scoreVal: string){
    switch(num){
      case 1:
        this.score1 = this.score1 - parseInt(scoreVal);
        if(this.score1<0)
        {
          this.score1=0;
        }
        break;
      case 2:
        this.score2 = this.score2 - parseInt(scoreVal);
        if(this.score2<0)
        {
          this.score2=0;
        }
        break;
      case 3:
        this.score3 = this.score3 - parseInt(scoreVal);
        if(this.score3<0)
        {
          this.score3=0;
        }
        break;
      case 4:
        this.score4 = this.score4 - parseInt(scoreVal);
        if(this.score4<0)
        {
          this.score4=0;
        }
        break;
      case 5:
        this.score5 = this.score5 - parseInt(scoreVal);
        if(this.score5<0)
        {
          this.score5=0;
        }
        break;
      }
  }
}
