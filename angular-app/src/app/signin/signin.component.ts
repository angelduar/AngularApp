import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import {CostumerService} from '../costumer.service';
import {Costumer} from '../costumer';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  username = ''
  password = ''
  id:number;
  costumer: Costumer;
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService, private CostumerService: CostumerService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

  test(){
    this.costumer = new Costumer();
    this.CostumerService.getCostumerById(this.id).subscribe(data => {
      this.costumer = data;
      console.log(data);
    });
  }

}
