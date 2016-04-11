import {bootstrap}    from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {TemplateMenuComponent} from './template-menu/template-menu.component';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
	selector: 'main-component',
	templateUrl: 'app/app.html',
	directives: [TemplateMenuComponent]
})
export class MainComponent {}

bootstrap(MainComponent, [HTTP_PROVIDERS]);