import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import {Costumer} from '../costumer';
import {CostumerService} from '../costumer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  costumer: Costumer = new Costumer();
  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService, private CostumerService: CostumerService) { }

  ngOnInit() {
  }

  goToDisplay(){
    this.router.navigate(['/ticket']);
  }

  Login(){
    this.CostumerService.createCostumer(this.costumer).subscribe(data => {
      console.log(data);
      alert("you are logged in");
      this.goToDisplay();
    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.costumer);
    this.Login();
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

  signin(){
    this.router.navigate(['/signin']);
  }

}
