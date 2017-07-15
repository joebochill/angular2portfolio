import {Component, Input} from '@angular/core';
import {PortfolioService} from './portfolio.service'; 

@Component({
	selector: 'project-details',
	templateUrl:'./project-details.component.html',
	styleUrls:['./project-details.component.css']
})

export class ProjectDetailsComponent{
	@Input() images: Object;
	@Input() details: Object;
	errorMessage: any;

	constructor(private portfolioService: PortfolioService){}

	public openLink(url:string){
	    window.open(url, "_blank");
	};

}