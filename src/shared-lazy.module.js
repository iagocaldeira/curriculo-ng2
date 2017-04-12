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
        define(["require", "exports", "@angular/core", "@angular/http", "@angular/common", "@ngx-translate/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var http_1 = require("@angular/http");
    var common_1 = require("@angular/common");
    var core_2 = require("@ngx-translate/core");
    var SharedLazyModule = (function () {
        function SharedLazyModule() {
        }
        return SharedLazyModule;
    }());
    SharedLazyModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpModule,
                common_1.CommonModule,
                core_2.TranslateModule.forChild({}),
            ],
            exports: [
                common_1.CommonModule,
                core_2.TranslateModule
            ]
        })
    ], SharedLazyModule);
    exports.SharedLazyModule = SharedLazyModule;
});
//# sourceMappingURL=shared-lazy.module.js.map