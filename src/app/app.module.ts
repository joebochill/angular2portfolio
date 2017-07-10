import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomePanelComponent } from './home-panel.component';
import { AboutPanelComponent } from './about-panel.component';
import { PortfolioPanelComponent } from './portfolio-panel.component';
import { ContactPanelComponent } from './contact-panel.component';
import { SocialButtonComponent } from './social-button.component';
import { InfoBlurbComponent } from './info-blurb.component';

@NgModule({
	imports: [ BrowserModule ],
	declarations: [ 
		AppComponent,
		HomePanelComponent,
		AboutPanelComponent,
		PortfolioPanelComponent,
		ContactPanelComponent,
		SocialButtonComponent,
		InfoBlurbComponent
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
