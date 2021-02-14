import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { AuthenticationService } from '../../service/authentication.service';
import { UserService } from '../../service/user.service';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    joinRoomForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ) {

    }

    ngOnInit() {
        this.joinRoomForm = this.formBuilder.group({
            code: ['', Validators.required],
        });
    }

    get f() { return this.joinRoomForm.controls; }

    onSubmit() {
        this.loading = true;

        if (this.joinRoomForm.invalid) {
            this.loading = false;
            return;
        }

        this.loading = false;
    }
}