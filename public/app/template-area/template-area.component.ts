import {Component, OnInit} from 'angular2/core';
import {TemplateComponent} from '../template/template.component';

@Component({
	selector: 'template-area',
	templateUrl: 'app/template-area/template-area.html',
	styleUrls: ['app/template-area/template-area.css'],
	directives: [TemplateComponent]
})
export class TemplateAreaComponent implements OnInit {
	private template;

	constructor() {
		this.template = {template: 'NEW TEMPLATE'};
	}

	ngOnInit() {

	}
}
