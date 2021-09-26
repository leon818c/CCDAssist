import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RandomizeComponent } from './randomize/randomize.component';
import { GroupingComponent } from './grouping/grouping.component';
import { WheelOfFortuneComponent } from './wheel-of-fortune/wheel-of-fortune.component';
import { CatholicAnswersComponent } from './catholic-answers/catholic-answers.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TestingComponent } from './testing/testing.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    RandomizeComponent,
    GroupingComponent,
    WheelOfFortuneComponent,
    CatholicAnswersComponent,
    HeaderComponent,
    HomeComponent,
    TestingComponent,
    FeaturesPageComponent,
    LoginComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
