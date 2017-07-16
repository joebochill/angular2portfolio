import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
	selector: 'contact-panel',
	templateUrl: './contact-panel.component.html',
	styleUrls: ['./contact-panel.component.css']
})

export class ContactPanelComponent implements OnInit{
	private currentDate: Date;

	ngOnInit(){
		this.currentDate = new Date();
	}
}