import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionDto } from '../model/questionDto';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  answerQuestion(question: QuestionDto) {
    this.http.patch(`http://localhost:8080/questions/v1.0`, question);
  }

}
