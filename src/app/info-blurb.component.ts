import {Component, Input} from '@angular/core';

@Component({
	selector: 'info-blurb',
	templateUrl:'./info-blurb.component.html',
	styleUrls:['./info-blurb.component.css']
})

export class InfoBlurbComponent{
	@Input() type: string = '';
	@Input() data: Object = {};
}