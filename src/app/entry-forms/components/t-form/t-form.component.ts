import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-t-form',
  templateUrl: './t-form.component.html',
  styleUrls: ['./t-form.component.scss'],
})
export class TFormComponent implements OnInit {
  constructor(public restService: RestService) {}

  ngOnInit(): void {}

  onSubmit(formData: any) {
    console.log('Form submitted', formData);
  }
}
