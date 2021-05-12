package com.angelduar.springboot.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Movies")
public class Movies {
	
	@Id
	private long id;
	
	@Column(name = "MovieName")
	private String movie_name;
	
	@Column(name = "showDate")
	private String show_date;
	
	@Column(name = "showTime")
	private String show_time;
	
	@Column(name = "Price")
	private long m_price;
	
	public Movies() {}
	
	
	public Movies(String movie_name, String show_date, String show_time, long price) {
		super();
		this.movie_name = movie_name;
		this.show_date = show_date;
		this.show_time = show_time;
		this.m_price = price;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getMovie_name() {
		return movie_name;
	}
	public void setMovie_name(String movie_name) {
		this.movie_name = movie_name;
	}
	public String getShow_date() {
		return show_date;
	}
	public void setShow_date(String show_date) {
		this.show_date = show_date;
	}
	public String getShow_time() {
		return show_time;
	}
	public void setShow_time(String show_time) {
		this.show_time = show_time;
	}
	public long getPrice() {
		return m_price;
	}
	public void setPrice(long price) {
		this.m_price = price;
	}
	
	
}
