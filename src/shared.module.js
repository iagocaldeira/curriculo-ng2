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
        define(["require", "exports", "@angular/core", "@angular/http", "@angular/common", "@ngx-translate/core", "@ngx-translate/http-loader"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var http_1 = require("@angular/http");
    var common_1 = require("@angular/common");
    var core_2 = require("@ngx-translate/core");
    var http_loader_1 = require("@ngx-translate/http-loader");
    // AoT requires an exported function for factories
    function HttpLoaderFactory(http) {
        return new http_loader_1.TranslateHttpLoader(http, 'i18n/', '.json');
    }
    exports.HttpLoaderFactory = HttpLoaderFactory;
    /** MyCommon Module: Re-exports BrowserModule and HttpModule */
    var SharedModule = (function () {
        function SharedModule(translate) {
            this.translate = translate;
            translate.addLangs(["en", "pt"]);
            translate.setDefaultLang('en');
            var browserLang = translate.getBrowserLang();
            translate.use(browserLang.match(/en|pt/) ? browserLang : 'en');
        }
        return SharedModule;
    }());
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpModule,
                common_1.CommonModule,
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.Http],
                    },
                    isolate: false
                })
            ],
            exports: [common_1.CommonModule, http_1.HttpModule, core_2.TranslateModule],
        }),
        __metadata("design:paramtypes", [core_2.TranslateService])
    ], SharedModule);
    exports.SharedModule = SharedModule;
});
//# sourceMappingURL=shared.module.js.map