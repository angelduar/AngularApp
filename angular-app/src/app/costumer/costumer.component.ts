import { Component, OnInit } from '@angular/core';
import {CostumerService} from '../costumer.service';
import {Router} from '@angular/router';
import {Costumer} from '../costumer';

@Component({
  selector: 'app-costumer',
  templateUrl: './costumer.component.html',
  styleUrls: ['./costumer.component.css']
})
export class CostumerComponent implements OnInit {

  costumer: Costumer = new Costumer();
  constructor(private CostumerService: CostumerService, private router: Router) { }

  ngOnInit(): void {
  }

  goToDisplay(){
    this.router.navigate(['/movie-list']);
  }

  saveCostumer(){
    this.CostumerService.createCostumer(this.costumer).subscribe(data => {
      console.log(data);
      alert("Your Purchase has been processed succesfully");
      this.goToDisplay();
    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.costumer);
    this.saveCostumer();
  }

}
