import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../model/game';
import { PlayerDto } from '../model/playerDto';
import { QuestionDto } from '../model/questionDto';
import { GameDto } from '../model/gameDto';

@Injectable({providedIn: 'root'})
export class GameServiceService {

  constructor(private http: HttpClient) { }

  createGame(game: Game) {
    //const headers = { "master": , "categoryId": };
    return this.http.post<Game>(`http://localhost:8080/games/v1.0`, JSON.stringify(game)).subscribe(
      res => res.code
    );
  }

  addPlayer(gameCode: string, playerDto: PlayerDto) {
    return this.http.post(`http://localhost:8080/games/v1.0/${gameCode}/players`, JSON.stringify(playerDto));
  }

  fetchGameQuestions(gameCode: string, withAllQuestion: boolean) {
    return this.http.get<QuestionDto>(`http://localhost:8080/games/v1.0/${gameCode}/questions&all=${withAllQuestion}`);
  }

  obtainGame(gameId: number) {
    this.http.get<GameDto>(`http://localhost:8080/games/v1.0/${gameId}`);
  }

}
