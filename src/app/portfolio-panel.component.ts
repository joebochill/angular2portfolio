import {Component, Input, OnInit} from '@angular/core';
import {PortfolioService} from './portfolio.service';

@Component({
	selector: 'portfolio-panel',
	templateUrl: './portfolio-panel.component.html',
	styleUrls: []
})

export class PortfolioPanelComponent implements OnInit{
	constructor(private portfolioService: PortfolioService){}

	//local vars
	@Input() project_id: number=-1;
	projectInfo: Object;
	errorMessage: any;

	//retrieve the project data via the API
	getProjectInfo(): void{
		this.portfolioService.getAllProjectInfo()
			.subscribe(
				projectInfo => this.projectInfo = projectInfo,
				error => this.errorMessage = <any>error
			);
	}

	ngOnInit(): void{
		this.getProjectInfo();
	}
}