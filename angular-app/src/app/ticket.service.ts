import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Ticket} from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  //reponse from REST api
  private baseURL = "http://localhost:8080/api/v1/tickets";
  constructor(private httpClient: HttpClient) { }

  
  createTicket(ticket : Ticket): Observable<Object>{
    return this.httpClient.post(this.baseURL, ticket);
  }

  getTicketById(id : number): Observable<Ticket>{
    return this.httpClient.get<Ticket>(`${this.baseURL}/${id}`);
  }

}
