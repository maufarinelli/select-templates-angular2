import {Component, OnInit} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class templateMenu {
	id: number;
	name: string;
}

@Component({
	selector: 'template-menu',
	templateUrl: 'app/template-menu/template-menu.html',
	styleUrls: ['app/template-menu/template-menu.css']
})
export class TemplateMenuComponent implements OnInit  {
	private http: Http;
	private templateList: templateMenu[];
	private templatesUrl = '/templates'

	constructor(http: Http) {
		this.http = http;
	}

	ngOnInit() {
		this.http.get(this.templatesUrl)
			.map(res => <templateMenu[]> res.json())
			.subscribe(templates => this.templateList = templates)
	}
}