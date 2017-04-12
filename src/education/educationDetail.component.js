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
     * This component injects "educationDetail" (resolve data) into the matching @Input and renders the detail */
    var template = "\n<h2>{{'DETAILS.EDUCATION.MODULE_TITLE' | translate}}</h2>\n\n<label>{{'DETAILS.EDUCATION.INSTITUTION' | translate}}: </label><p>{{education.institution}}</p><br>\n<label>{{'DETAILS.EDUCATION.AREA' | translate}}: </label><p>{{education.area}}</p><br>\n<label>{{'DETAILS.EDUCATION.STUDYTYPE' | translate}} : </label><p>{{education.studyType}}</p><br>\n<label>{{'DETAILS.EDUCATION.STARTDATE' | translate}} : </label><p>{{education.startDate}}</p><br>\n<label>{{'DETAILS.EDUCATION.ENDDATE' | translate}} : </label><p>{{education.endDate}}</p><br>\n";
    var EducationDetailsComponent = (function () {
        function EducationDetailsComponent() {
        }
        return EducationDetailsComponent;
    }());
    __decorate([
        core_1.Input('educationDetail'),
        __metadata("design:type", Object)
    ], EducationDetailsComponent.prototype, "education", void 0);
    EducationDetailsComponent = __decorate([
        core_1.Component({
            selector: 'education-detail',
            template: template
        })
    ], EducationDetailsComponent);
    exports.EducationDetailsComponent = EducationDetailsComponent;
});
//# sourceMappingURL=educationDetail.component.js.map