import { Component, OnInit } from '@angular/core';
import {CostumerService} from '../costumer.service';
import {Router} from '@angular/router';
import {Costumer} from '../costumer';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-costumer',
  templateUrl: './costumer.component.html',
  styleUrls: ['./costumer.component.css']
})
export class CostumerComponent implements OnInit {

  id: number;
  costumer: Costumer;
  constructor(private CostumerService: CostumerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.costumer = new Costumer();
    this.CostumerService.getCostumerById(this.id).subscribe(data => {
      this.costumer = data;
      console.log(data);
    });
  }

  goToDisplay(){
    this.router.navigate(['/movie-list']);
  }

  saveCostumer(){
    alert("Your Purchase has been processed succesfully");
    this.goToDisplay();
  }

  onSubmit(){
    console.log(this.costumer);
    this.saveCostumer();
  }

}
