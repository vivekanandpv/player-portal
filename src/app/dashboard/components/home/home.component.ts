import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: Observable<any[]>;

  constructor(private restService: RestService) {
    this.items = this.restService.getItems();
  }

  ngOnInit(): void {}
}
