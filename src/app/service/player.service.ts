import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionDto } from '../model/questionDto';
import { HitDto } from '../model/hitDto';
import { PlayerDto } from '../model/playerDto';

@Injectable({providedIn: 'root'})
export class PlayerService {

  constructor(private http: HttpClient) { }

  askQuestion(username: string, question: string) {
    const headers = {  }
    return this.http.patch<QuestionDto>(`http://localhost:8080/players/v1.0/${username}/questions`, question, { headers }).subscribe(
      res => res
    )
  }

  makeAGuess(username: string, guess: string) {
    const headers = {  }
    return this.http.post<HitDto>(`http://localhost:8080/players/v1.0/${username}/guess`, guess, { headers }).subscribe(
      res => res
    )
  }

  getPlayer(username: string) {
    return this.http.get<PlayerDto>(`http://localhost:8080/players/v1.0/${username}`);
  }

}
