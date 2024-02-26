import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../core/services/api.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity'];
  emptyListMessage = 'No products available!';
  public products: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProducts().subscribe({
      next: (products: any[]) => {
        this.products = products;
      },
      error: error => {
        if (error.status === 401) {
          this.emptyListMessage = `You are not authorized to view data!`
        }
        console.log(error)
      }
    })
  }
}
