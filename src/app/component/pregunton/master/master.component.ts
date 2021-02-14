import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game';
import { Question } from 'src/app/model/question';
import { QuestionService } from '../../../service/question.service';
import { QuestionDto } from '../../../model/questionDto';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  game: Game;
  questionDto: QuestionDto;
  unansweredQuestions: Question[];

  constructor(private questionService: QuestionService) { }

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
    this.questionDto.id = questionId;
    this.questionDto.answer = answer;
    this.questionService.answerQuestion(this.questionDto);
  }
}
