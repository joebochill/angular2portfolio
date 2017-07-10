import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<home-panel></home-panel>
		<about-panel></about-panel>
		<portfolio-panel></portfolio-panel>
		<contact-panel></contact-panel>
	`
})
export class AppComponent  {}
