import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public restService: RestService) {}

  ngOnInit(): void {
    this.restService.getItems().subscribe(
      (items) => console.log(items),
      (error) => console.log('Error occurred', error)
    );
  }
}
