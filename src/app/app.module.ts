import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RandomizeComponent8 } from './grade8/randomize/randomize.component';
import { GroupingComponent8 } from './grade8/grouping/grouping.component';
import { QuestionsComponent8 } from './grade8/questions/questions.component';
import { RandomizeComponent4 } from './grade4/randomize/randomize.component';
import { GroupingComponent4 } from './grade4/grouping/grouping.component';
import { QuestionsComponent4 } from './grade4/questions/questions.component';

import { WheelOfFortuneComponent } from './wheel-of-fortune/wheel-of-fortune.component';
import { CatholicAnswersComponent } from './catholic-answers/catholic-answers.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TestingComponent } from './testing/testing.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { RoutingModule } from './routing/routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RandomizeComponent4,
    GroupingComponent4,
    QuestionsComponent4,
    RandomizeComponent8,
    GroupingComponent8,
    QuestionsComponent8,
    WheelOfFortuneComponent,
    CatholicAnswersComponent,
    HeaderComponent,
    HomeComponent,
    TestingComponent,
    FeaturesPageComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
