import {Component} from '@angular/core';
import animateScrollTo from 'animated-scroll-to';

@Component({
	selector: 'home-panel',
	template:`
		<section class="homePanel">
            <div class="shadowBox">
            	<div class="homeText">
	                <div class="navBar">
	                	<div (click)="_scrollIntoView('aboutPanel')">ABOUT</div><div class="slash">/</div><br class="break" />
	                	<div (click)="_scrollIntoView('portfolioPanel')">PORTFOLIO</div><div class="slash">/</div><br class="break" />
	                	<div (click)="_scrollIntoView('contactPanel')">CONTACT</div><div class="slash">/</div><br class="break" />
	                	<div (click)="_openLink('/resume/Boyle_Joseph_Resume.pdf')" class="icon download">R&Eacute;SUM&Eacute;</div>
                	</div>
	                <div class="nameBar">JOSEPH P. BOYLE</div>
	                <div class="roleBar">USER EXPERIENCE ENGINEER</div>
                </div>
            </div>
		</section>
	`,
	styleUrls: ['./home-panel.component.css']
})

export class HomePanelComponent{
	private _scrollIntoView(panel:string){
		animateScrollTo(document.getElementById(panel).offsetTop)
	}
	private _openLink(url:string){
		window.open(url, "_blank");
	}
}