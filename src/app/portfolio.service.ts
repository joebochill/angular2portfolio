import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PortfolioService{
	private url = 'http://www.josephpboyle.com/api/portfolioAPI.php?'; //URL to web API

	constructor(private http: Http){}


	//API Calls to get DB information
	getEducation(): Observable<Object>{
		return this.http.get(this.url+'type=about&data=education')
			.map(this.extractData)
			.catch(this.handleError);
	}
	getEmployment(): Observable<Object>{
		return this.http.get(this.url+'type=about&data=employment')
			.map(this.extractData)
			.catch(this.handleError);
	}
	getSkills(): Observable<Object>{
		return this.http.get(this.url+'type=about&data=skills')
			.map(this.extractData)
			.catch(this.handleError);
	}
	// getVisibleProjects(): Observable<number[]>{
	// 	return this.http.get(this.url+'type=list')
	// 		.map(this.extractData)
	// 		.catch(this.handleError);
	// }
	// getProjectOverview(id:number): Observable<Object>{
	// 	return this.http.get(this.url+'type=project&id='+id)
	// 		.map(this.extractData)
	// 		.catch(this.handleError);
	// }
	// getProjectDetails(id:number): Observable<Object>{
	// 	return this.http.get(this.url+'type=details&id='+id)
	// 		.map(this.extractData)
	// 		.catch(this.handleError);
	// }
	getAllProjectInfo(): Observable<Object>{
		return this.http.get(this.url+'type=allprojectinfo')
			.map(this.extractData)
			.catch(this.handleError);
	}


	//Utility Functions
	private extractData(res: Response){
		let body = res.json();
		return body.data || {};
	}
	private handleError(error: Response | any){
		let errMsg: string;
		if(error instanceof Response){
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		}
		else{
			errMsg = error.message ? error.message : error.toString();
		}
		console.log(errMsg);
		return Observable.throw(errMsg);
	}
}