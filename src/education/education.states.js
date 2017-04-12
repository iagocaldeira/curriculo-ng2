(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/http", "./educationList.component", "./educationDetail.component", "./educationFooter.component", "ui-router-ng2"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var http_1 = require("@angular/http");
    var educationList_component_1 = require("./educationList.component");
    var educationDetail_component_1 = require("./educationDetail.component");
    var educationFooter_component_1 = require("./educationFooter.component");
    var ui_router_ng2_1 = require("ui-router-ng2");
    /**
     * This file defines the states for the `education` module.
     * The states are exported as an array and imported in the EducationModule.
     */
    exports.EDUCATION_STATES = [
        // A state for the 'app.education' submodule.
        // - Fills in the unnamed <ui-view> ($default) from `app` state with `EducationListComponent`
        // - Fills in the footer <ui-view name="footer"> from `app` state with `EducationFooterComponent`
        // - Fetches educationList data using a resolve, then the component displays the data
        {
            name: 'app.education',
            url: '/education',
            views: {
                $default: { component: educationList_component_1.EducationListComponent },
                footer: { component: educationFooter_component_1.EducationFooterComponent }
            },
            resolve: [
                // Inject 'http' and fetch all the education data
                {
                    token: 'educationList',
                    deps: [http_1.Http],
                    resolveFn: function (http) {
                        return http.get('/data/educationData.json').map(function (res) { return res.json(); }).toPromise();
                    }
                }
            ]
        },
        // A child state of app.education
        // - This state fills the unnnamed <ui-view> (in `EducationListComponent` from  `app.foo` state) with `EducationDetailsComponent`
        // - Has a parameter :educationId which appears in the URL
        // - Resolves educationDetail, then the component displays the data
        {
            name: 'app.education.details', url: '/?educationId', component: educationDetail_component_1.EducationDetailsComponent,
            resolve: [
                // Inject the educationList (from the parent) and find the correct
                {
                    token: 'educationDetail',
                    deps: ['educationList', ui_router_ng2_1.Transition],
                    resolveFn: function (educationList, trans) {
                        return educationList.find(function (item) { return item.id == trans.params().educationId; });
                    }
                }
            ]
        },
    ];
});
//# sourceMappingURL=education.states.js.map