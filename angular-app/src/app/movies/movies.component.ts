import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../movie.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  id: number;
  movie: Movie;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.movie = new Movie();
    this.movieService.getMovieById(this.id).subscribe(data => {
      this.movie = data;
      console.log(data);
    });
  }

  Purchase(){
    this.router.navigate(['/login']);
  }

  back(){
    this.router.navigate(['/movie-list']);
  }

}
