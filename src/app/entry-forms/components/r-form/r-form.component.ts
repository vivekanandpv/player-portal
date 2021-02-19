import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.scss'],
})
export class RFormComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['Default Name', [Validators.pattern(/^[A-Za-z ]{3,50}$/)]],
      debut: [2021, [Validators.min(1990), Validators.max(2021)]],
      genre: ['cricket', [Validators.required]],
      isActive: [true],
      shortBio: ['some bio here...'],
    });
  }

  ngOnInit(): void {}

  get name(): FormControl {
    return this.registrationForm.controls['name'] as FormControl;
  }

  get debut(): FormControl {
    return this.registrationForm.controls['debut'] as FormControl;
  }

  get genre(): FormControl {
    return this.registrationForm.controls['genre'] as FormControl;
  }

  get isActive(): FormControl {
    return this.registrationForm.controls['isActive'] as FormControl;
  }

  get shortBio(): FormControl {
    return this.registrationForm.controls['shortBio'] as FormControl;
  }

  onSubmit() {
    console.log('Submit handler called', this.registrationForm.value);
  }
}
