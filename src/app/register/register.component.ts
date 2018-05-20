import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	email: string;
	password: string;
	confirmPassword: string;
	key: string;

  constructor() { }

  ngOnInit() {
	}

	register () {
	}

}
