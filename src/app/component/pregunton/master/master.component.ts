import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  game: Game;
  unansweredQuestions: Question[];

  constructor() { }

  ngOnInit(): void {
    this.game = {
      code: localStorage.getItem('game-code'),
      hit: 'something',
      rules: {
        hitLimit: 5,
        questionLimit: 5
      }
    };
    this.unansweredQuestions = [];
  }

  answerQuestion(questionId: number, answer: string) {

  }
}
