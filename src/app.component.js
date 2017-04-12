var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@ngx-translate/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var core_2 = require("@ngx-translate/core");
    /**
     * The top level application component.
     *
     * This component renders three uiSref "links" and has a viewport for a child to fill in.
     */
    var template = "\n  <!-- Wrapper -->\n\t<div id=\"wrapper\">\n\n\t\t<!-- Header -->\n\t\t<header id=\"header\">\n\t\t\t<div class=\"logo\">\n\t\t\t\t<span class=\"icon fa-diamond\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"content\">\n\n\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t<h1>{{ 'TITLE' | translate }}</h1>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<nav>\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a uiSref=\"app.work\" [uiOptions]=\"{ inherit: false }\" uiSrefActive=\"active\" >{{'MENU.WORK' | translate}}</a></li>\n\t\t\t\t\t<li><a uiSref=\"app.education\" [uiOptions]=\"{ inherit: false }\" uiSrefActive=\"active\" >{{'MENU.EDUCATION' | translate}}</a></li>\n\t\t\t\t\t<li><a uiSref=\"app.skills\" [uiOptions]=\"{ inherit: false }\" uiSrefActive=\"active\" >{{'MENU.SKILLS' | translate}}</a></li>\n\t\t\t\t\t<li><a uiSref=\"app.interests\" [uiOptions]=\"{ inherit: false }\" uiSrefActive=\"active\" >{{'MENU.INTERESTS' | translate}}</a></li>\n\t\t\t\t\t<li><a uiSref=\"app.languages\" [uiOptions]=\"{ inherit: false }\" uiSrefActive=\"active\" >{{'MENU.LANGUAGES' | translate}}</a></li>\n        <li>\n              <!-- {{ 'HOME.SELECT' | translate }} -->\n              <select #langSelect (change)=\"translate.use(langSelect.value)\">\n                <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\" [selected]=\"lang === translate.currentLang\">{{ lang }}</option>\n              </select>\n        </li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</header>\n\n\t\t<!-- Main -->\n\t\t<div id=\"main\" style=\"width:500px;padding-top:50px\">\n      <ui-view></ui-view>\n\t\t</div>\n    \n\t\t<!-- Footer -->\n\t\t<footer id=\"footer\">\n      <ui-view name=\"footer\"></ui-view>\n\t\t</footer>\n";
    var AppComponent = (function () {
        function AppComponent(translate) {
            this.translate = translate;
        }
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: template
        }),
        __metadata("design:paramtypes", [core_2.TranslateService])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map