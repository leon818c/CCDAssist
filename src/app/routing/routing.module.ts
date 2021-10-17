import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { QuestionsComponent8 } from '../grade8/questions/questions.component';
import { QuestionsComponent4 } from '../grade4/questions/questions.component';
import { RandomizeComponent4 } from '../grade4/randomize/randomize.component';
import { GroupingComponent4 } from '../grade4/grouping/grouping.component';

const routes: Routes=[
  {path: 'home', component: HomeComponent},
  // {path: 'home', redirectTo: '/home', pathMatch:'full'},
  {path: 'randomize/8', component: QuestionsComponent8},
  {path: 'questions/4', component: QuestionsComponent4},
  {path: 'randomize/4', component: RandomizeComponent4},
  {path: 'grouping/4', component: GroupingComponent4},
  {path: 'grouping/4', redirectTo: '/grouping/4', pathMatch:'full'},

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
