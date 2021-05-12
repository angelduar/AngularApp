import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Movie} from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //reponse from REST api
  private baseURL = "http://localhost:8080/api/v1/movies";
  constructor(private httpClient: HttpClient) { }

  getMoviesList(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.baseURL);
  }

  getMovieById(id: number): Observable<Movie>{
    return this.httpClient.get<Movie>(`${this.baseURL}/${id}`);
  }

  /*

  updateStudent(id: number, student: Student): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, student);
  }

  deleteStudent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getStudentbyId(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
  }
  */
}
