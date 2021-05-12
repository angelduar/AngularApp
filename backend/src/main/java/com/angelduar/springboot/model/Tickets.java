package com.angelduar.springboot.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Tickets")
public class Tickets {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long num;
	
	@Column(name = "TicketPrice")
	private long price;
	
	public Tickets() {}
	
	
	public Tickets(long Ticket_price) {
		super();
		this.price = Ticket_price;
	}
	public long getId() {
		return num;
	}
	public void setId(long id) {
		this.num = id;
	}
	public long getTicket_price() {
		return price;
	}
	public void setTicket_price(long price) {
		this.price = price;
	}
}
