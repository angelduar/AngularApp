import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie'
import {MovieService} from '../movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];
  //inject movie service on this component to manage data
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
  }

  //method to populate the movies array with data
  private getMovies(){
    this.movieService.getMoviesList().subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    })
  }

  view(id: number){
    this.router.navigate(['movies', id]);
  }

}
