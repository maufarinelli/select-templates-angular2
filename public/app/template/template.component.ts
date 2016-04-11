import {Component, OnInit, Input} from 'angular2/core';

@Component({
	selector: 'template',
	template: '<h3>{{template}}</h3>'
})
export class TemplateComponent {
	@Input() template: string;
}