import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<home-panel></home-panel>
		<about-panel id="aboutPanel"></about-panel>
		<portfolio-panel id="portfolioPanel"></portfolio-panel>
		<contact-panel id="contactPanel"></contact-panel>
	`
})
export class AppComponent  {}
