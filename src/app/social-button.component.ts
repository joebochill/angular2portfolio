import {Component, Input} from '@angular/core';

@Component({
	selector: 'social-button',
	template:`
		<div class="socialButton" [title]="linkUrl" (click)="openLink()">
			<img src={{imageUrl}} class="mainImg" />
			<img *ngIf="hoverUrl" src={{hoverUrl}} class="hoverImg"/>
			<div class="lighten"></div>
		</div>
	`,
	styleUrls: ['./social-button.component.css']
})

export class SocialButtonComponent{
	@Input() imageUrl: string='';
	@Input() hoverUrl: string='';
	@Input() linkUrl: string='';
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