import {Component, Input} from '@angular/core';

@Component({
	selector: 'info-blurb',
	template:`
		<div class="blurbBody">
    		<div *ngIf="imageUrl" class="blurbImage" [style.background-image]="imageUrl"></div>
    		<div class="blurbContent">
    			<ng-content></ng-content>
			</div>
		</div>
	`,
	styleUrls:['./info-blurb.component.css']
})

export class InfoBlurbComponent{
	@Input() imageUrl: string='';
}