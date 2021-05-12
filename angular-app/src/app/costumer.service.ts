import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Costumer} from './costumer';

@Injectable({
  providedIn: 'root'
})
export class CostumerService {

  //reponse from REST api
  private baseURL = "http://localhost:8080/api/v1/costumers";
  constructor(private httpClient: HttpClient) { }

  
  createCostumer(costumer: Costumer): Observable<Object>{
    return this.httpClient.post(this.baseURL, costumer);
  }

  getCostumerById(id: number): Observable<Costumer>{
    return this.httpClient.get<Costumer>(`${this.baseURL}/${id}`);
  }

}