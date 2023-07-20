import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LayoutData } from '../models/DataLayout';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiURL = 'https://api.instabuy.com.br/apiv3';
  constructor(private http: HttpClient) {}

  getLayoutData(): Observable<LayoutData> {
    return this.http.get<LayoutData>(
      `${this.apiURL}/layout?subdomain=supermercado`
    );
  }
}
