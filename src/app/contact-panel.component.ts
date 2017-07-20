import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
	selector: 'contact-panel',
	templateUrl: './contact-panel.component.html',
	styles: [`
		.footer{
			width:100%;
			text-align:center;
			font-size: 1.2rem;
		}
		.contactButtons{
			padding-top: 4rem;
			text-align: center;
		}
		.break{
			display: none;
		}
		@media (max-width: 720px){
			.break{
				display: inline;
			}
		}
	`]
})

export class ContactPanelComponent implements OnInit{
	private currentDate: Date;
	private fbLink = "https://www.facebook.com/joseph.boyle.50";
	private liLink = "https://www.linkedin.com/profile/view?id=111377795";
	private emailLink = "mailto:boyle.p.joseph@gmail.com";
	private hrLink = "https://www.hackerrank.com/joebochill";
	private igLink = "https://www.instagram.com/joebochill";

	ngOnInit(){
		this.currentDate = new Date();
	}
}