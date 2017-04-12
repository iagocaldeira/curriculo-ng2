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
     * This component injects "interestsDetail" (resolve data) into the matching @Input and renders the detail */
    var template = "\n<h2>{{'DETAILS.INTERESTS.MODULE_TITLE' | translate}}</h2>\n\n<label>{{'DETAILS.INTERESTS.NAME' | translate}}: </label><p>{{interests.name}}</p><br>\n<label>{{'DETAILS.INTERESTS.KEYWORDS' | translate}}: </label>\n  <ul>\n  <li *ngFor=\"let keyword of interests.keywords\" uiSrefActive=\"active\">\n    <p>{{keyword}}</p>\n  </li>\n</ul>";
    var InterestsDetailsComponent = (function () {
        function InterestsDetailsComponent() {
        }
        return InterestsDetailsComponent;
    }());
    __decorate([
        core_1.Input('interestsDetail'),
        __metadata("design:type", Object)
    ], InterestsDetailsComponent.prototype, "interests", void 0);
    InterestsDetailsComponent = __decorate([
        core_1.Component({
            selector: 'interests-detail',
            template: template
        })
    ], InterestsDetailsComponent);
    exports.InterestsDetailsComponent = InterestsDetailsComponent;
});
//# sourceMappingURL=interestsDetail.component.js.map