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
        define(["require", "exports", "ui-router-ng2", "../shared.module", "./skills.states", "@angular/core", "./skillsList.component", "./skillsDetail.component", "./skillsFooter.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ui_router_ng2_1 = require("ui-router-ng2");
    var shared_module_1 = require("../shared.module");
    var skills_states_1 = require("./skills.states");
    var core_1 = require("@angular/core");
    var skillsList_component_1 = require("./skillsList.component");
    var skillsDetail_component_1 = require("./skillsDetail.component");
    var skillsFooter_component_1 = require("./skillsFooter.component");
    /** The Skills NgModule */
    var SkillsModule = (function () {
        function SkillsModule() {
        }
        return SkillsModule;
    }());
    SkillsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                ui_router_ng2_1.UIRouterModule.forChild({ states: skills_states_1.SKILLS_STATES })
            ],
            declarations: [
                skillsList_component_1.SkillsListComponent,
                skillsDetail_component_1.SkillsDetailsComponent,
                skillsFooter_component_1.SkillsFooterComponent,
            ]
        })
    ], SkillsModule);
    exports.SkillsModule = SkillsModule;
});
//# sourceMappingURL=skills.module.js.map