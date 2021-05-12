import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviesComponent } from './movies/movies.component';
import { CostumerComponent } from './costumer/costumer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SigninComponent } from './signin/signin.component';

//defining routes to my components 
const routes: Routes = [
  {path: "movie-list", component: MovieListComponent},
  {path: "movies/:id", component: MoviesComponent},
  {path: "costumer", component: CostumerComponent},
  { path: 'login', component: LoginComponent },
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  { path: 'logout', component: LogoutComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
