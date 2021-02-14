import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from 'src/app/model/game';
import { Category } from 'src/app/model/category';
import { GameService } from '../../../service/game.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  createRoomForm: FormGroup;
  loading = false;
  submitted = false;
  categoryList: Category[] = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private gameService: GameService
  ) {
    
  }

  ngOnInit() {
    this.createRoomForm = this.formBuilder.group({
      guess: ['', Validators.required],
      category: ['', Validators.required],
      hitLimit: ['', [ Validators.required, Validators.min(1), Validators.max(200) ]],
      questionLimit: ['', [ Validators.required, Validators.min(1), Validators.max(200) ]],
    });

    this.categoryList = [];
  }

  get f() { return this.createRoomForm.controls; }

  onSubmit() {
    this.loading = true;

    if (this.createRoomForm.invalid) {
      this.loading = false;
        return;
    }

    const game: Game = {
      hit: this.f.guess.value,
      rules: {
        hitLimit: this.f.hitLimit.value,
        questionLimit: this.f.questionLimit.value
      }
      
    };
    this.gameService.createGame(game);

    this.router.navigate(['/game/control']);
    this.loading = false;
  }
}
