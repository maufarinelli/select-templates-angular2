System.register(['angular2/core', 'angular2/common', '../templates/template-1.component', '../templates/template-2.component', '../templates/template-3.component'], function(exports_1) {
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
    var core_1, common_1, template_1_component_1, template_2_component_1, template_3_component_1;
    var TemplateSwitchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (template_1_component_1_1) {
                template_1_component_1 = template_1_component_1_1;
            },
            function (template_2_component_1_1) {
                template_2_component_1 = template_2_component_1_1;
            },
            function (template_3_component_1_1) {
                template_3_component_1 = template_3_component_1_1;
            }],
        execute: function() {
            TemplateSwitchComponent = (function () {
                function TemplateSwitchComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TemplateSwitchComponent.prototype, "template");
                TemplateSwitchComponent = __decorate([
                    core_1.Component({
                        selector: 'template-switch',
                        templateUrl: 'app/template-switch/template-switch.html',
                        directives: [template_1_component_1.Template1Component, template_2_component_1.Template2Component, template_3_component_1.Template3Component, common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateSwitchComponent);
                return TemplateSwitchComponent;
            })();
            exports_1("TemplateSwitchComponent", TemplateSwitchComponent);
        }
    }
});
//# sourceMappingURL=template-switch.component.js.map