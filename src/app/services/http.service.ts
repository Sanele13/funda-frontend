import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpService {
  headers = {headers: new HttpHeaders({'Content-Type':'application/json'})};
  constructor(
    private http: HttpClient
  ) { }

  register(user_data){
    return this.http.post('/register', user_data,{headers: new HttpHeaders({'Content-Type':'application/json'})});
  }

  login(user_data){
    return this.http.post('/login',user_data,this.headers);
  }

  getData(url,payload){
    return this.http.post(url,payload,this.headers);
  }

  saveQuestion(question){

  }
  getAnswers(grade,subject){

  }

  saveAnswer(answer_data){
    return this.http.post('/answer/create',answer_data,this.headers);
  }

  getTutorials(){

  }

  saveTutorial(tutorial){

  }
  getNotes(){

  }

  saveNote(note){

  }

  getCueCards(){

  }

  saveCueCards(cue_card){

  }
}
