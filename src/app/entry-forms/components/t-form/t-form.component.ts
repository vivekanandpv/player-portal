import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-t-form',
  templateUrl: './t-form.component.html',
  styleUrls: ['./t-form.component.scss'],
})
export class TFormComponent implements OnInit {
  constructor(private restService: RestService) {}

  ngOnInit(): void {}

  onSubmit(formData: any) {
    this.restService.updatePlayer(formData, 1004).subscribe(
      (res) => console.log('Success', res),
      (error) => console.log('Error', error)
    );
  }
}
