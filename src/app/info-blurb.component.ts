import {Component, Input, ElementRef, AfterViewInit} from '@angular/core';
const transition = require('transition-to-from-auto');
import animateScrollTo from 'animated-scroll-to';

@Component({
	selector: 'info-blurb',
	templateUrl:'./info-blurb.component.html',
	styleUrls:['./info-blurb.component.css']
})

export class InfoBlurbComponent implements AfterViewInit{
	@Input() type: string = '';
	@Input() data: Object = {};
	@Input() expanded: boolean=false;
	elem: HTMLElement;

	scrollOptions = {
	  speed: 500,
	  minDuration: 400,
	  maxDuration: 1500,
	  element: window,
	  cancelOnUserAction: true
	};

	constructor(private elementRef: ElementRef){}

	private toggle(){
	    this.expanded = !this.expanded;
	    if(this.expanded){
	    	this.elem.style.display = "block";
	    }
	    if(!this.expanded){
			animateScrollTo(
				this.elementRef.nativeElement.offsetTop+
				this.elementRef.nativeElement.offsetParent.offsetTop
				- 28, this.scrollOptions);
	    }
	    transition({element: this.elem, val: (this.expanded?"auto":"0px")});
	    transition({
		  element: this.elem,
		  prop: "margin-top",
		  val: (this.expanded?"1rem":"0px")
		});
		
	};

	ngAfterViewInit(){
		if(this.type != 'project'){return;}
		this.elem = this.elementRef.nativeElement.getElementsByClassName("detailsWrapper")[0];
		this.elem.addEventListener(transition.end, 
			(event)=>{
				if(event.propertyName=="height" && this.expanded){
					this.elem.style.height = "auto";
				}
				else if(event.propertyName=="height" && !this.expanded){
					this.elem.style.display = "none";
				}
		});
	}
}