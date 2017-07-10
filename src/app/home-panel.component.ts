import {Component} from '@angular/core';

@Component({
	selector: 'home-panel',
	template:`
		<section class="homePanel">
            <div class="shadowBox">
            	<div class="homeText">
	                <div class="navBar">
	                	<div>ABOUT</div> / 
	                	<div>PORTFOLIO</div> / 
	                	<div>CONTACT</div> /
	                	<div class="icon download">R&Eacute;SUM&Eacute;</div>
                	</div>
	                <div class="nameBar">JOSEPH P. BOYLE</div>
	                <div class="roleBar">USER EXPERIENCE ENGINEER</div>
                </div>
            </div>
		</section>
	`,
	styleUrls: ['./home-panel.component.css']
})

export class HomePanelComponent{}