import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatDialogModule, MatExpansionModule, MatProgressSpinnerModule} from '@angular/material';


import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BodyComponent } from './components/body/body.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {HttpClientModule} from '@angular/common/http';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { NotesComponent } from './components/notes/notes.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { QuestionAnswersComponent } from './components/question-answers/question-answers.component';
import { CuecardsComponent } from './components/cuecards/cuecards.component';
import {FetchDataService} from './services/fetch-data.service';
import {HttpService} from './services/http.service';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BodyComponent,
    SpinnerComponent,
    ClassroomComponent,
    NotesComponent,
    TutorialsComponent,
    QuestionAnswersComponent,
    CuecardsComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule ,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatExpansionModule,
    MatDialogModule
  ],
  entryComponents:[
    PopupComponent
  ],
  providers: [FetchDataService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
