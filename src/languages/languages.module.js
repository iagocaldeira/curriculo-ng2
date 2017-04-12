var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "ui-router-ng2", "../shared.module", "./languages.states", "@angular/core", "./languagesList.component", "./languagesDetail.component", "./languagesFooter.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ui_router_ng2_1 = require("ui-router-ng2");
    var shared_module_1 = require("../shared.module");
    var languages_states_1 = require("./languages.states");
    var core_1 = require("@angular/core");
    var languagesList_component_1 = require("./languagesList.component");
    var languagesDetail_component_1 = require("./languagesDetail.component");
    var languagesFooter_component_1 = require("./languagesFooter.component");
    /** The Languages NgModule */
    var LanguagesModule = (function () {
        function LanguagesModule() {
        }
        return LanguagesModule;
    }());
    LanguagesModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                ui_router_ng2_1.UIRouterModule.forChild({ states: languages_states_1.LANGUAGES_STATES })
            ],
            declarations: [
                languagesList_component_1.LanguagesListComponent,
                languagesDetail_component_1.LanguagesDetailsComponent,
                languagesFooter_component_1.LanguagesFooterComponent,
            ]
        })
    ], LanguagesModule);
    exports.LanguagesModule = LanguagesModule;
});
//# sourceMappingURL=languages.module.js.map