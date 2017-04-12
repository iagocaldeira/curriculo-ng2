(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/http", "./workList.component", "./workDetail.component", "./workFooter.component", "ui-router-ng2"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var http_1 = require("@angular/http");
    var workList_component_1 = require("./workList.component");
    var workDetail_component_1 = require("./workDetail.component");
    var workFooter_component_1 = require("./workFooter.component");
    var ui_router_ng2_1 = require("ui-router-ng2");
    /**
     * This file defines the states for the `work` module.
     * The states are exported as an array and imported in the WorkModule.
     */
    exports.WORK_STATES = [
        // A state for the 'app.work' submodule.
        // - Fills in the unnamed <ui-view> ($default) from `app` state with `WorkListComponent`
        // - Fills in the footer <ui-view name="footer"> from `app` state with `WorkFooterComponent`
        // - Fetches workList data using a resolve, then the component displays the data
        {
            name: 'app.work',
            url: '/work',
            views: {
                $default: { component: workList_component_1.WorkListComponent },
                footer: { component: workFooter_component_1.WorkFooterComponent }
            },
            resolve: [
                // Inject 'http' and fetch all the work data
                {
                    token: 'workList',
                    deps: [http_1.Http],
                    resolveFn: function (http) {
                        return http.get('/data/workData.json').map(function (res) { return res.json(); }).toPromise();
                    }
                }
            ]
        },
        // A child state of app.work
        // - This state fills the unnnamed <ui-view> (in `WorkListComponent` from  `app.foo` state) with `WorkDetailsComponent`
        // - Has a parameter :workId which appears in the URL
        // - Resolves workDetail, then the component displays the data
        {
            name: 'app.work.details', url: '/?workId', component: workDetail_component_1.WorkDetailsComponent,
            resolve: [
                // Inject the workList (from the parent) and find the correct
                {
                    token: 'workDetail',
                    deps: ['workList', ui_router_ng2_1.Transition],
                    resolveFn: function (workList, trans) {
                        return workList.find(function (item) { return item.id == trans.params().workId; });
                    }
                }
            ]
        },
    ];
});
//# sourceMappingURL=work.states.js.map