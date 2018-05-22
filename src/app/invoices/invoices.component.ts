import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

	agentNumber: string;
	invoices: Array<Invoice>;

	constructor() {
		this.invoices = new Array<Invoice>();
		let invoice: Invoice = new Invoice();
		invoice.name = "lol";
		invoice.phone = "23231231231";
		invoice.total = 23232;
		invoice.date = 3442432424;
		invoice.agent = 69;
		this.invoices.push(invoice);
	}

  ngOnInit() {
  }

}
