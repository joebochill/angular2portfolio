import {Component, Input, OnInit} from '@angular/core';
import {PortfolioService} from './portfolio.service';

@Component({
	selector: 'portfolio-panel',
	templateUrl: './portfolio-panel.component.html',
	styleUrls: ['./portfolio-panel.component.css']
})

export class PortfolioPanelComponent{
	constructor(private portfolioService: PortfolioService){}

	//local vars
	@Input() project_id: number=-1;
	sampleprojects:Array<Object>=[];
	errorMessage: any;

	//retrieve the sample project object from the DB API
	getSampleProject(id:number): void{
		this.portfolioService.getSampleProject(id)
			.subscribe(
				project => this.sampleprojects[id] = project,
				error => this.errorMessage = <any>error
			);
	}

	ngOnInit(): void{
		for(let i=1; i<=8; i++){
			this.getSampleProject(i);
		}
	}
}