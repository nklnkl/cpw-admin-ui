import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
	mobileNav: boolean = false;

	toggleNav () {
		this.mobileNav = !this.mobileNav;
	}
}
