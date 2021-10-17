import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import questions from '../../data/questions.json';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent8 implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  question: any = {};

  AllQuestions: {
    id:string,
    question: string,
    choice1: string,
    choice2: string,
    choice3: string,
    choice4: string,
    answer: number
  }[] = questions;

  currentQuestion: any;
  selectedQuestion: number=0;
  answerSelection: string;

  que: string;
  ch1: string;
  ch2: string;
  ch3: string;
  ch4: string;
  ans: number;
  isCorrect: number;
  show: boolean = false;
  timerSeconds: number=0;
  interval: any;

  constructor() { }

  startCountdown(counter: number){
    this.timerSeconds = 0;

    this.interval = setInterval(()=>{
      this.timerSeconds = this.timerSeconds + 10;

    if(this.timerSeconds>200){
      clearInterval(this.interval);
      this.timerSeconds=200;
    }
    },1000);
  }

  init(){
    this.show = false;
    this.que = '';
    this.ch1 = '';
    this.ch2 = '';
    this.ch3 = '';
    this.ch4 = '';
  }

  getQuestionById(){
    this.init();
    if(this.selectedQuestion<this.AllQuestions.length){
      this.que = questions[this.selectedQuestion].question;
      this.ch1 = this.AllQuestions[this.selectedQuestion].choice1;
      this.ch2 = this.AllQuestions[this.selectedQuestion].choice2;
      if(this.AllQuestions[this.selectedQuestion].choice3!=null){
        this.ch3 = this.AllQuestions[this.selectedQuestion].choice3;
      }
      if(this.AllQuestions[this.selectedQuestion].choice4!=null){
        this.ch4 = this.AllQuestions[this.selectedQuestion].choice4;
      }
      this.ans = this.AllQuestions[this.selectedQuestion].answer;
      this.isCorrect=0;
    }
    // console.log(this.ch1);
    // console.log(this.ch2);
    // console.log(this.ch3);
    // console.log(this.ch4);
    // console.log(this.ans);


  }
  ngOnInit(): void {
    this.init();
  }
  Navigate(menuItem: string){
    //console.log(menuItem);
    this.featureSelected.emit(menuItem);
  }
  
  startGame(){
    this.init();
    this.getQuestionById();
    this.startCountdown(100);
  }

  getNextQuestion(){
    clearInterval(this.interval);
    this.startCountdown(100);
    if(this.selectedQuestion+1 >= this.AllQuestions.length){
      this.selectedQuestion = this.AllQuestions.length;
    }else{
      this.selectedQuestion++;
      this.getQuestionById();
    }
  }

  getPreviousQuestion(){
    clearInterval(this.interval);
    this.startCountdown(100);
    if(this.selectedQuestion<=0){
      this.selectedQuestion=0;
    }else{
      this.selectedQuestion--;
    }
    this.getQuestionById();
  }

  incrementQuestionNumber(){
    if(this.selectedQuestion<0){
      this.selectedQuestion=0;
    }else if(this.selectedQuestion>this.AllQuestions.length){
      this.selectedQuestion = this.AllQuestions.length;
    }else{
      this.selectedQuestion++;
    }
  }

  showAnswer(){
    this.show = !this.show;
  }

}
