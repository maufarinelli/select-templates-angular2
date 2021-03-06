System.register(['angular2/core', '../template-switch/template-switch.component', 'angular2/common'], function(exports_1) {
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
    var core_1, template_switch_component_1, common_1;
    var TemplateAreaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (template_switch_component_1_1) {
                template_switch_component_1 = template_switch_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            TemplateAreaComponent = (function () {
                function TemplateAreaComponent() {
                    this.template = 'template-1';
                }
                TemplateAreaComponent = __decorate([
                    core_1.Component({
                        selector: 'template-area',
                        templateUrl: 'app/template-area/template-area.html',
                        styleUrls: ['app/template-area/template-area.css'],
                        directives: [template_switch_component_1.TemplateSwitchComponent, common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateAreaComponent);
                return TemplateAreaComponent;
            })();
            exports_1("TemplateAreaComponent", TemplateAreaComponent);
        }
    }
});
//# sourceMappingURL=template-area.component.js.map