import {Component, OnInit} from 'angular2/core';
import {TemplateSwitchComponent} from '../template-switch/template-switch.component';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
	selector: 'template-area',
	templateUrl: 'app/template-area/template-area.html',
	styleUrls: ['app/template-area/template-area.css'],
	directives: [TemplateSwitchComponent, CORE_DIRECTIVES]
})
export class TemplateAreaComponent {
	private template: string;

	constructor() {
		this.template = 'template-1';
	}
}
