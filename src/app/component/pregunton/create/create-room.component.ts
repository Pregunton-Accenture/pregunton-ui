import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  createRoomForm: FormGroup;
  loading = false;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    this.createRoomForm = this.formBuilder.group({
      guess: ['', Validators.required],
      category: ['', Validators.required],
      hitLimit: ['', [ Validators.required, Validators.min(1), Validators.max(200) ]],
      questionLimit: ['', [ Validators.required, Validators.min(1), Validators.max(200) ]],
    });

  }

  get f() { return this.createRoomForm.controls; }

  onSubmit() {
    this.loading = true;

    if (this.createRoomForm.invalid) {
      this.loading = false;
        return;
    }

    this.loading = false;
  }
}
