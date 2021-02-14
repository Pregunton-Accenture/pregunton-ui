import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

  fetchAllAnswers() {
    return this.http.get(`http://localhost:8080/answers/v1.0`);
  }

}
