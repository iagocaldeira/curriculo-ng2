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
     * This component is shown in the footer when any skills state is active.
     * It receives the `skillsList` resolve data and displays the count of skills objects loaded.
     */
    var SkillsFooterComponent = (function () {
        function SkillsFooterComponent() {
        }
        return SkillsFooterComponent;
    }());
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SkillsFooterComponent.prototype, "skillsList", void 0);
    SkillsFooterComponent = __decorate([
        core_1.Component({
            selector: 'skills-footer',
            template: "<p class=\"copyright\">{{'FOOTER.SKILLS' | translate}}</p>"
        })
    ], SkillsFooterComponent);
    exports.SkillsFooterComponent = SkillsFooterComponent;
});
//# sourceMappingURL=skillsFooter.component.js.map