(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/http", "./languagesList.component", "./languagesDetail.component", "./languagesFooter.component", "ui-router-ng2"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var http_1 = require("@angular/http");
    var languagesList_component_1 = require("./languagesList.component");
    var languagesDetail_component_1 = require("./languagesDetail.component");
    var languagesFooter_component_1 = require("./languagesFooter.component");
    var ui_router_ng2_1 = require("ui-router-ng2");
    /**
     * This file defines the states for the `languages` module.
     * The states are exported as an array and imported in the LanguagesModule.
     */
    exports.LANGUAGES_STATES = [
        // A state for the 'app.languages' submodule.
        // - Fills in the unnamed <ui-view> ($default) from `app` state with `LanguagesListComponent`
        // - Fills in the footer <ui-view name="footer"> from `app` state with `LanguagesFooterComponent`
        // - Fetches languagesList data using a resolve, then the component displays the data
        {
            name: 'app.languages',
            url: '/languages',
            views: {
                $default: { component: languagesList_component_1.LanguagesListComponent },
                footer: { component: languagesFooter_component_1.LanguagesFooterComponent }
            },
            resolve: [
                // Inject 'http' and fetch all the languages data
                {
                    token: 'languagesList',
                    deps: [http_1.Http],
                    resolveFn: function (http) {
                        return http.get('/data/languagesData.json').map(function (res) { return res.json(); }).toPromise();
                    }
                }
            ]
        },
        // A child state of app.languages
        // - This state fills the unnnamed <ui-view> (in `LanguagesListComponent` from  `app.foo` state) with `LanguagesDetailsComponent`
        // - Has a parameter :languagesId which appears in the URL
        // - Resolves languagesDetail, then the component displays the data
        {
            name: 'app.languages.details', url: '/?languagesId', component: languagesDetail_component_1.LanguagesDetailsComponent,
            resolve: [
                // Inject the languagesList (from the parent) and find the correct
                {
                    token: 'languagesDetail',
                    deps: ['languagesList', ui_router_ng2_1.Transition],
                    resolveFn: function (languagesList, trans) {
                        return languagesList.find(function (item) { return item.id == trans.params().languagesId; });
                    }
                }
            ]
        },
    ];
});
//# sourceMappingURL=languages.states.js.map