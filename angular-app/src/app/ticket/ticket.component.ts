import { Component, OnInit } from '@angular/core';
import {TicketService} from '../ticket.service';
import {Router} from '@angular/router';
import {Ticket} from '../ticket';

@Component({
  selector: 'app-costumer',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticket : Ticket = new Ticket();
  constructor(private TicketService: TicketService, private router: Router) { }

  ngOnInit(): void {
  }

  goToDisplay(){
    this.router.navigate(['/movie-list']);
  }

  saveTicket(){
    this.TicketService.createTicket(this.ticket).subscribe(data => {
      console.log(data);
      alert("Your Purchase has been processed succesfully");
      this.goToDisplay();
    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.ticket);
    this.saveTicket();
  }

}
