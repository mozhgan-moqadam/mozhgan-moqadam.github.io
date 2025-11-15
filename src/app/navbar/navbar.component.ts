import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [RouterModule, NgIf, TranslateModule],
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
	currentLang = 'en';
	isHamburgerOpen = false;
	constructor(private translate: TranslateService) {
		translate.addLangs(['en', 'de']);
		translate.setDefaultLang('en');
		this.currentLang = translate.currentLang || 'en';
	}

	switchLang() {
		this.currentLang = this.currentLang === 'en' ? 'de' : 'en';
		this.translate.use(this.currentLang);
	}

	toggleHamburger() {
		this.isHamburgerOpen = !this.isHamburgerOpen;
	}

	closeHamburger() {
		this.isHamburgerOpen = false
	}
}
