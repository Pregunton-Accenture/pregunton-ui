import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { CreateRoomComponent } from './component/pregunton/create/create-room.component';
import { GameComponent } from './component/pregunton/game/game.component';
import { MasterComponent } from './component/pregunton/master/master.component';
import { LoginComponent } from './component/user/login/login.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
    {
        path: '', canActivate: [AuthGuard], children: [
            {
                path: '', component: HomeComponent
            },
            {
                path: 'room/create', component: CreateRoomComponent
            },
            {
                path: 'game', component: GameComponent
            },
            {
                path: 'game/control', component: MasterComponent
            }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: SignupComponent },
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);