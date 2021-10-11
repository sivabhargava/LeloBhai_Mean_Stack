import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  products: any;

  constructor(private data: DataService, private rest: RestApiService) {}

  async ngOnInit() {
    try {
      const data = await this.rest.get('http://52.14.70.131:3030/api/products');
      data['success']
        ? (this.products = data['products'])
        : this.data.error('Could not fetch products.');
    } catch (error) {
      this.data.error(error['message']);
    }
  }
}
