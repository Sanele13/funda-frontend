import {Component, Inject, Input, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {MatDialog} from '@angular/material';
import {PopupComponent} from '../popup/popup.component';

@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.scss']
})


export class QuestionAnswersComponent implements OnInit {
  @Input() questions;
  constructor(
    private httpService: HttpService,
    private popup: MatDialog
  ) { }

  ngOnInit() {
  }

  answer(answer_data){
    this.httpService.saveAnswer(answer_data).subscribe(result => {
      console.log(result);
    });
  }

  openAnswerPopup(question_data){
    const dialogRef = this.popup.open(PopupComponent, {
      width: '250px',
      data: {name: 'Sanele', animal: 'Lion'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
