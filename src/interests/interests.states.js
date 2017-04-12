(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/http", "./interestsList.component", "./interestsDetail.component", "./interestsFooter.component", "ui-router-ng2"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var http_1 = require("@angular/http");
    var interestsList_component_1 = require("./interestsList.component");
    var interestsDetail_component_1 = require("./interestsDetail.component");
    var interestsFooter_component_1 = require("./interestsFooter.component");
    var ui_router_ng2_1 = require("ui-router-ng2");
    /**
     * This file defines the states for the `interests` module.
     * The states are exported as an array and imported in the InterestsModule.
     */
    exports.INTERESTS_STATES = [
        // A state for the 'app.interests' submodule.
        // - Fills in the unnamed <ui-view> ($default) from `app` state with `InterestsListComponent`
        // - Fills in the footer <ui-view name="footer"> from `app` state with `InterestsFooterComponent`
        // - Fetches interestsList data using a resolve, then the component displays the data
        {
            name: 'app.interests',
            url: '/interests',
            views: {
                $default: { component: interestsList_component_1.InterestsListComponent },
                footer: { component: interestsFooter_component_1.InterestsFooterComponent }
            },
            resolve: [
                // Inject 'http' and fetch all the interests data
                {
                    token: 'interestsList',
                    deps: [http_1.Http],
                    resolveFn: function (http) {
                        return http.get('/data/interestsData.json').map(function (res) { return res.json(); }).toPromise();
                    }
                }
            ]
        },
        // A child state of app.interests
        // - This state fills the unnnamed <ui-view> (in `InterestsListComponent` from  `app.foo` state) with `InterestsDetailsComponent`
        // - Has a parameter :interestsId which appears in the URL
        // - Resolves interestsDetail, then the component displays the data
        {
            name: 'app.interests.details', url: '/?interestsId', component: interestsDetail_component_1.InterestsDetailsComponent,
            resolve: [
                // Inject the interestsList (from the parent) and find the correct
                {
                    token: 'interestsDetail',
                    deps: ['interestsList', ui_router_ng2_1.Transition],
                    resolveFn: function (interestsList, trans) {
                        return interestsList.find(function (item) { return item.id == trans.params().interestsId; });
                    }
                }
            ]
        },
    ];
});
//# sourceMappingURL=interests.states.js.map