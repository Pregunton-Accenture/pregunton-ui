import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    private currentUserSubject: BehaviorSubject<User>;

    constructor(private http: HttpClient) { }

    register(user: User) {
        const headers = {"Access-Control-Allow-Origin":"*"}
        return this.http.post<User>(`http://localhost:8081/users/`, user, {headers})
        .pipe(map(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }

    validate(token: string) {
        return this.http.post(`http://localhost:8081/validate/`, token);
    }

    refreshToken(token: String) {
        return this.http.post(`http://localhost:8081/refresh/`, token);
    }

}