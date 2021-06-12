import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-customer-by-ura',
  templateUrl: './customer-by-ura.component.html',
  styleUrls: ['./customer-by-ura.component.scss'],
})
export class CustomerByUraComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle(`${this.title.getTitle()} - Cliente via URA`);
  }
}
