import {bootstrap}    from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {TemplateMenuComponent} from './template-menu/template-menu.component';
import {TemplateAreaComponent} from './template-area/template-area.component';
import {TemplateComponent} from './template/template.component';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
	selector: 'main-component',
	templateUrl: 'app/app.html',
	directives: [TemplateMenuComponent, TemplateAreaComponent, TemplateComponent]
})
export class MainComponent {}

bootstrap(MainComponent, [HTTP_PROVIDERS]);