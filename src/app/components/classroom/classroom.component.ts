import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {HttpService} from '../../services/http.service';
@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {
  page = 'home';
  panelOpenState:boolean;
  message:string = null;
  subjects = [
    {
      id:1,
      title:'Mathematics',
      Grade:11,
      language:'English',
      teacher:'Sanele Mpangalala'
    },
    {
      id:2,
      title:'Physical Science',
      Grade:11,
      language:'English',
      teacher:'Sanele Mpangalala'
    },
    {
      id:3,
      title:'Geography',
      Grade:11,
      language:'English',
      teacher:'Sanele Mpangalala'
    },
    {
      id:4,
      title:'Biology',
      Grade:11,
      language:'English',
      teacher:'Sanele Mpangalala'
    }
  ];


  notes;
  qa;
  tutorials;
  cue_cards;


  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
  }

  goTo(destination: string) {
    this.page = destination;
  }

  setMessage(subject,grade){
    this.message = 'Loading grade ' + grade + ' ' + subject + ' ' + this.page;
    let payload = {
      subject:subject,
      grade:grade,
    };
    this.httpService.getData('/' + this.page, payload).subscribe(results => {
      switch (this.page) {
        case 'q-and-a':
          this.qa = results['data'];
          break;

        case 'tutorials':
          this.tutorials = results['data'];
          break;

        case 'notes':
          this.notes = results['data'];
          break;

        case 'cue-cards':
          this.cue_cards = results['data'];
          break;
        default:
          break;
      }
    });
  }
}
