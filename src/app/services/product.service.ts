import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiURL = 'https://api.instabuy.com.br/apiv3';
  constructor(private http: HttpClient) {}

  getItemData(slug: string | null): Observable<any> {
    return this.http.get<any>(
      `${this.apiURL}/item?subdomain=supermercado&slug=${slug}`
    );
  }
}
