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
        define(["require", "exports", "rxjs/add/operator/toPromise", "rxjs/add/operator/map", "@angular/platform-browser-dynamic", "ui-router-ng2", "@angular/core", "@angular/platform-browser", "@angular/common", "./app.states", "./app.component", "./work/work.module", "./education/education.module", "./skills/skills.module", "./interests/interests.module", "./languages/languages.module", "./router.config", "./shared.module"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("rxjs/add/operator/toPromise");
    require("rxjs/add/operator/map");
    var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
    var ui_router_ng2_1 = require("ui-router-ng2");
    var core_1 = require("@angular/core");
    var platform_browser_1 = require("@angular/platform-browser");
    var common_1 = require("@angular/common");
    var app_states_1 = require("./app.states");
    var app_component_1 = require("./app.component");
    var work_module_1 = require("./work/work.module");
    var education_module_1 = require("./education/education.module");
    var skills_module_1 = require("./skills/skills.module");
    var interests_module_1 = require("./interests/interests.module");
    var languages_module_1 = require("./languages/languages.module");
    var router_config_1 = require("./router.config");
    var shared_module_1 = require("./shared.module");
    // Enables tracing (check the console) of:
    // - TRANSITION transition start, redirect, success, error, ignored
    // - VIEWCONFIG ui-view component creation/destruction and viewconfig de/activation
    ui_router_ng2_1.trace.enable(ui_router_ng2_1.Category.TRANSITION, ui_router_ng2_1.Category.VIEWCONFIG);
    var RootModule = (function () {
        function RootModule() {
        }
        return RootModule;
    }());
    RootModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                ui_router_ng2_1.UIRouterModule.forRoot({
                    states: app_states_1.MAIN_STATES,
                    otherwise: { state: 'app', params: {} },
                    useHash: true,
                    configClass: router_config_1.MyRootUIRouterConfig
                }),
                work_module_1.WorkModule,
                education_module_1.EducationModule,
                skills_module_1.SkillsModule,
                interests_module_1.InterestsModule,
                languages_module_1.LanguagesModule,
                shared_module_1.SharedModule
            ],
            declarations: [app_component_1.AppComponent],
            providers: [
                // Provide a NgModule lazy loading strategy
                { provide: core_1.NgModuleFactoryLoader, useClass: core_1.SystemJsNgModuleLoader },
            ],
            bootstrap: [ui_router_ng2_1.UIView],
        })
    ], RootModule);
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(RootModule);
});
//# sourceMappingURL=bootstrap.js.map