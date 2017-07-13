import {Component, OnInit} from '@angular/core';
import {PortfolioService} from './portfolio.service';

@Component({
	selector: 'about-panel',
	templateUrl: './about-panel.component.html',
	styleUrls: ['./about-panel.component.css']
})

export class AboutPanelComponent{
	constructor(private portfolioService: PortfolioService){}

	//local vars
	education: Object;
	employment: Object;
	skills: Object;
	errorMessage: any;

	//retrieve the education object from the DB API
	getEducation(): void{
		this.portfolioService.getEducation()
			.subscribe(
				education => this.education = education,
				error => this.errorMessage = <any>error
			);
	}

	//retrieve the employment object from the DB API
	getEmployment(): void{
		this.portfolioService.getEmployment()
			.subscribe(
				employment => this.employment = employment,
				error => this.errorMessage = <any>error
			);
	}

	//retrieve the education object from the DB API
	getSkills(): void{
		this.portfolioService.getSkills()
			.subscribe(
				skills => this.skills = skills,
				error => this.errorMessage = <any>error
			);
	}

	ngOnInit(): void{
		this.getEducation();
		this.getEmployment();
		this.getSkills();
	}


}