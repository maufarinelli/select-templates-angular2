System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1) {
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
    var core_1, http_1;
    var templateMenu, TemplateMenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            templateMenu = (function () {
                function templateMenu() {
                }
                return templateMenu;
            })();
            exports_1("templateMenu", templateMenu);
            TemplateMenuComponent = (function () {
                function TemplateMenuComponent(http) {
                    this.templatesUrl = '/templates';
                    this.http = http;
                }
                TemplateMenuComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.http.get(this.templatesUrl)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (templates) { return _this.templateList = templates; });
                };
                TemplateMenuComponent = __decorate([
                    core_1.Component({
                        selector: 'template-menu',
                        templateUrl: 'app/template-menu/template-menu.html',
                        styleUrls: ['app/template-menu/template-menu.css']
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TemplateMenuComponent);
                return TemplateMenuComponent;
            })();
            exports_1("TemplateMenuComponent", TemplateMenuComponent);
        }
    }
});
//# sourceMappingURL=template-menu.component.js.map