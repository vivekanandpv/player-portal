import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-form',
  templateUrl: './t-form.component.html',
  styleUrls: ['./t-form.component.scss'],
})
export class TFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(formData: any) {
    console.log('Form submitted', formData);
  }
}
