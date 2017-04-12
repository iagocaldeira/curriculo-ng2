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
        define(["require", "exports", "@angular/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    /**
     * This component injects "skillsDetail" (resolve data) into the matching @Input and renders the detail */
    var template = "\n<h2>{{'DETAILS.SKILLS.MODULE_TITLE' | translate}}</h2>\n\n<label>{{'DETAILS.SKILLS.NAME' | translate}}: </label><p>{{skills.name}}</p><br>\n<label>{{'DETAILS.SKILLS.LEVEL' | translate}}: </label><p>{{skills.level}}</p><br>\n<label>{{'DETAILS.SKILLS.KEYWORDS' | translate}}: </label>\n  <ul>\n  <li *ngFor=\"let keyword of skills.keywords\" uiSrefActive=\"active\">\n    {{keyword}}\n  </li>\n</ul>\n";
    var SkillsDetailsComponent = (function () {
        function SkillsDetailsComponent() {
        }
        return SkillsDetailsComponent;
    }());
    __decorate([
        core_1.Input('skillsDetail'),
        __metadata("design:type", Object)
    ], SkillsDetailsComponent.prototype, "skills", void 0);
    SkillsDetailsComponent = __decorate([
        core_1.Component({
            selector: 'skills-detail',
            template: template
        })
    ], SkillsDetailsComponent);
    exports.SkillsDetailsComponent = SkillsDetailsComponent;
});
//# sourceMappingURL=skillsDetail.component.js.map