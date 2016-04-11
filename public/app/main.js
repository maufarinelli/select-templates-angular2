System.register(['angular2/platform/browser', 'angular2/core', './template-menu/template-menu.component', './template-area/template-area.component', './template/template.component', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, template_menu_component_1, template_area_component_1, template_component_1, http_1;
    var MainComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (template_menu_component_1_1) {
                template_menu_component_1 = template_menu_component_1_1;
            },
            function (template_area_component_1_1) {
                template_area_component_1 = template_area_component_1_1;
            },
            function (template_component_1_1) {
                template_component_1 = template_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                }
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main-component',
                        templateUrl: 'app/app.html',
                        directives: [template_menu_component_1.TemplateMenuComponent, template_area_component_1.TemplateAreaComponent, template_component_1.TemplateComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            })();
            exports_1("MainComponent", MainComponent);
            browser_1.bootstrap(MainComponent, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map