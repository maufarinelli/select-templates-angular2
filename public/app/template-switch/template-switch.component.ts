import {Component, OnInit, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Template1Component} from '../templates/template-1.component';
import {Template2Component} from '../templates/template-2.component';
import {Template3Component} from '../templates/template-3.component';

@Component({
	selector: 'template-switch',
	templateUrl: 'app/template-switch/template-switch.html',
	directives: [Template1Component, Template2Component, Template3Component, CORE_DIRECTIVES]
})
export class TemplateSwitchComponent {
	@Input() template: string;
}