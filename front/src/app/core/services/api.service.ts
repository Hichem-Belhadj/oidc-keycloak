import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API = environment.api;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any[]>(this.API + "/api/v1/products");
  }
}
