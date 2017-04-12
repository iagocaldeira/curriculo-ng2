var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    /**
     * This component has "skillsList" (resolve data) injected into the constructor.
     *
     * It creates a list of uiSref (links) to the skills details and highlights the active uiSref
     * It provides a <ui-view> viewport for a child state to fill in
     */
    var template = "\n<h3>{{'MENU.SKILLS' | translate}}</h3>\n\n<ul>\n  <li *ngFor=\"let skill of skills\" uiSrefActive=\"active\">\n    <a uiSref=\".details\" [uiParams]=\"{skillsId: skill.id}\">{{skill.name}}</a>\n  </li>\n</ul>\n\n<ui-view></ui-view>\n";
    var SkillsListComponent = (function () {
        // resolve data injected by name 'skillsList' into 'skills' property
        function SkillsListComponent(skills) {
            this.skills = skills;
        }
        return SkillsListComponent;
    }());
    SkillsListComponent = __decorate([
        core_1.Component({
            selector: 'skills',
            template: template
        }),
        __param(0, core_1.Inject("skillsList")),
        __metadata("design:paramtypes", [Object])
    ], SkillsListComponent);
    exports.SkillsListComponent = SkillsListComponent;
});
//# sourceMappingURL=skillsList.component.js.map