import {Component, Input} from '@angular/core';

@Component({
	selector: 'project-details',
	template:`
		<div class="toggleWrapper">
			<a class="showHide" (click)="toggle()">{{selected?'Hide Details':'Show Details'}}</a>
		</div>
		<div *ngIf="selected" class="detailsContainer">
			<div class="projectStats">
				<h1>Time Frame</h1>
					<h2>Started May 2016</h2>
					<h2>Ongoing</h2>
				<h1>Deliverables</h1>
					<h2>Web Component Library</h2>
					<h2>Online Documentation</h2>
				<h1>Team</h1>
					<h2>2 Interaction Designers</h2>
				<h1>Primary Roles</h1>
					<h2>Interaction Designer</h2>
					<h2>Developer</h2>
				<h1>Primary Responsibilities</h1>
					<h2>Web Component Creation</h2>
					<h2>Documentation</h2>
				<h1>Skills Required</h1>
					<h2>Web Components / Polymer</h2>
					<h2>HTML / CSS</h2>
					<h2>Responsive Design</h2>
			</div>
			<div class="photosWrapper" (click)="openLink()">
				<div class="projectPhoto">
					<img src="../images/thumbs/pxi.png"/>
				</div>
				<div class="projectPhoto" (click)="openLink()">
					<img src="../images/thumbs/pxi.png"/>
				</div>
				<div class="projectPhoto" (click)="openLink()">
					<img src="../images/thumbs/pxi.png"/>
				</div>
				<div class="projectPhoto" (click)="openLink()">
					<img src="../images/thumbs/pxi.png"/>
				</div>
				<div class="projectPhoto" (click)="openLink()">
					<img src="../images/thumbs/pxi.png"/>
				</div>
				<div class="projectPhoto" (click)="openLink()">
					<img src="../images/thumbs/pxi.png"/>
				</div>
			</div>
		</div>
	`,
	styleUrls:['./project-details.component.css']
})

export class ProjectDetailsComponent{
	@Input() project: number=-1;
	@Input() selected: boolean=false;
	public openLink(){
	    window.open("http://www.google.com", "_blank");
	};
	private toggle(){
	    this.selected = !this.selected;
	};
}