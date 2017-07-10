import {Component, Input} from '@angular/core';

@Component({
	selector: 'social-button',
	template:`
		<div class="socialButton" [style.background-image]="imageUrl" (click)="openLink()">
			<div class="lighten"></div>
		</div>
	`,
	styleUrls: ['./social-button.component.css']
})

export class SocialButtonComponent{
	@Input() imageUrl: string='';
	@Input() linkUrl: string='';
	public openLink(){
	    window.open(this.linkUrl, "_blank");
	};
}