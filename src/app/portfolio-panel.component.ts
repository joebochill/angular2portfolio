import {Component, OnInit} from '@angular/core';
import {PortfolioService} from './portfolio.service';

@Component({
	selector: 'portfolio-panel',
	templateUrl: './portfolio-panel.component.html',
	styleUrls: ['./portfolio-panel.component.css']
})

export class PortfolioPanelComponent{
	constructor(private portfolioService: PortfolioService){}

	//local vars
	sampleproject: Object;
	errorMessage: any;

	//retrieve the sample project object from the DB API
	getSampleProject(): void{
		this.portfolioService.getSampleProject()
			.subscribe(
				project => this.sampleproject = project,
				error => this.errorMessage = <any>error
			);
	}

	ngOnInit(): void{
		this.getSampleProject();
	}
}