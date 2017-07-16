import {Component, Input, ElementRef} from '@angular/core';
const transition = require('transition-to-from-auto');

@Component({
	selector: 'info-blurb',
	templateUrl:'./info-blurb.component.html',
	styleUrls:['./info-blurb.component.css']
})

export class InfoBlurbComponent{
	@Input() type: string = '';
	@Input() data: Object = {};
	@Input() expanded: boolean=false;

	constructor(private elementRef: ElementRef){}

	private toggle(){
	    this.expanded = !this.expanded;
	    var elem = this.elementRef.nativeElement.getElementsByClassName("detailsWrapper")[0];
	    transition({element: elem, val: (this.expanded?"auto":"0px")});
	    transition({
		  element: elem,
		  prop: "margin-top",
		  val: (this.expanded?"1rem":"0px")
		});
	};
}