import { NgModule, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/user/login/login.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { appRoutingModule } from './app.routing';
import { CreateRoomComponent } from './component/pregunton/create/create-room.component';
import { JoinRoomComponent } from './component/pregunton/join/join-room.component';
import { GameComponent } from './component/pregunton/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CreateRoomComponent,
    JoinRoomComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
