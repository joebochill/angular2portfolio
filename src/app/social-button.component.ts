import {Component, Input} from '@angular/core';

@Component({
	selector: 'social-button',
	template:`
		<div class="socialButton" [attr.type]="type" [title]="linkUrl" (click)="openLink()">
			<div class="lighten"></div>
		</div>
	`,
	styleUrls: ['./social-button.component.css']
})

export class SocialButtonComponent{
	@Input() imageUrl: string='';
	// @Input() hoverUrl: string='';
	@Input() linkUrl: string='';
	@Input()type: string='';
	public openLink(){
		if(!this.linkUrl){return;}

		if(this.linkUrl.match(/^mailto:/)){
			location.href = this.linkUrl;
		}
		else{
	    	window.open(this.linkUrl, "_blank");
		}
	};
}