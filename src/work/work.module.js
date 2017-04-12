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
        define(["require", "exports", "ui-router-ng2", "../shared.module", "./work.states", "@angular/core", "./workList.component", "./workDetail.component", "./workFooter.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ui_router_ng2_1 = require("ui-router-ng2");
    var shared_module_1 = require("../shared.module");
    var work_states_1 = require("./work.states");
    var core_1 = require("@angular/core");
    var workList_component_1 = require("./workList.component");
    var workDetail_component_1 = require("./workDetail.component");
    var workFooter_component_1 = require("./workFooter.component");
    /** The Work NgModule */
    var WorkModule = (function () {
        function WorkModule() {
        }
        return WorkModule;
    }());
    WorkModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                ui_router_ng2_1.UIRouterModule.forChild({ states: work_states_1.WORK_STATES })
            ],
            declarations: [
                workList_component_1.WorkListComponent,
                workDetail_component_1.WorkDetailsComponent,
                workFooter_component_1.WorkFooterComponent,
            ]
        })
    ], WorkModule);
    exports.WorkModule = WorkModule;
});
//# sourceMappingURL=work.module.js.map