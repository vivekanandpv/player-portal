import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.scss'],
})
export class RFormComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private restService: RestService) {
    this.registrationForm = this.fb.group({
      name: ['Default Name', [this.validateName.bind(this)]],
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

  validateName(ctl: AbstractControl): ValidationErrors | null {
    const value = ctl.value;

    if (/^[A-Za-z ]{3,50}$/.test(value)) {
      //  validation passing. return null
      return null;
    } else {
      return {
        regexError: true,
      };
    }
  }

  onSubmit() {
    this.restService.createPlayer(this.registrationForm.value).subscribe(
      (res) => console.log('Success', res),
      (error) => console.log('Error', error)
    );
  }
}
