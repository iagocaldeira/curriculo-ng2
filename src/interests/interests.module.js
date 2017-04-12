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
        define(["require", "exports", "ui-router-ng2", "../shared.module", "./interests.states", "@angular/core", "./interestsList.component", "./interestsDetail.component", "./interestsFooter.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ui_router_ng2_1 = require("ui-router-ng2");
    var shared_module_1 = require("../shared.module");
    var interests_states_1 = require("./interests.states");
    var core_1 = require("@angular/core");
    var interestsList_component_1 = require("./interestsList.component");
    var interestsDetail_component_1 = require("./interestsDetail.component");
    var interestsFooter_component_1 = require("./interestsFooter.component");
    /** The Interests NgModule */
    var InterestsModule = (function () {
        function InterestsModule() {
        }
        return InterestsModule;
    }());
    InterestsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                ui_router_ng2_1.UIRouterModule.forChild({ states: interests_states_1.INTERESTS_STATES })
            ],
            declarations: [
                interestsList_component_1.InterestsListComponent,
                interestsDetail_component_1.InterestsDetailsComponent,
                interestsFooter_component_1.InterestsFooterComponent,
            ]
        })
    ], InterestsModule);
    exports.InterestsModule = InterestsModule;
});
//# sourceMappingURL=interests.module.js.map