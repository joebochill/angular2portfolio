import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import {HttpModule } 		from '@angular/http';

import {PortfolioService} from './portfolio.service';

import { AppComponent }  			from './app.component';
import { HomePanelComponent } 		from './home-panel.component';
import { AboutPanelComponent } 		from './about-panel.component';
import { PortfolioPanelComponent } 	from './portfolio-panel.component';
import { ContactPanelComponent } 	from './contact-panel.component';
import { SocialButtonComponent } 	from './social-button.component';
import { InfoBlurbComponent } 		from './info-blurb.component';
import { ProjectDetailsComponent } 	from './project-details.component';

@NgModule({
	imports: [ 
		BrowserModule,
		HttpModule
	],
	declarations: [ 
		AppComponent,
		HomePanelComponent,
		AboutPanelComponent,
		PortfolioPanelComponent,
		ContactPanelComponent,
		SocialButtonComponent,
		InfoBlurbComponent,
		ProjectDetailsComponent
	],
	providers: [PortfolioService],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
