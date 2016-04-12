import {bootstrap}    from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {TemplateMenuComponent} from './template-menu/template-menu.component';
import {TemplateAreaComponent} from './template-area/template-area.component';
import {TemplateSwitchComponent} from './template-switch/template-switch.component';
import {Template1Component} from './templates/template-1.component';
import {Template2Component} from './templates/template-2.component';
import {Template3Component} from './templates/template-3.component';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
	selector: 'main-component',
	templateUrl: 'app/app.html',
	directives: [
		TemplateMenuComponent,
		TemplateAreaComponent,
		TemplateSwitchComponent,
		Template1Component,
		Template2Component,
		Template3Component
	]
})
export class MainComponent {
}

bootstrap(MainComponent, [HTTP_PROVIDERS]);