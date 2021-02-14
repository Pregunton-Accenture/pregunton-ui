import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Game } from 'src/app/model/game';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  questionGuessForm: FormGroup;
  loading = false;
  submitted = false;
  code: string;
  questions: Question[];
  
  constructor(
    private formBuilder: FormBuilder,
  ) {
    
  }

  ngOnInit() {
    this.questionGuessForm = this.formBuilder.group({
      questionGuess: ['', Validators.required],
    });
    this.code = localStorage.getItem('game-code');
    this.questions = [];
  }

  get f() { return this.questionGuessForm.controls; }

  askQuestion() {
    this._onSubmit(() => {
      const question = this.f.questionGuess.value;
    });
  }

  makeGuess() {
    this._onSubmit(() => {
      const guess = this.f.questionGuess.value;
    });
  }

  private _onSubmit(func: Function) {
    this.loading = true;

    if (this.questionGuessForm.invalid) {
      this.loading = false;
        return;
    }

    this.loading = false;
  }
}
