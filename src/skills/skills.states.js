(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/http", "./skillsList.component", "./skillsDetail.component", "./skillsFooter.component", "ui-router-ng2"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var http_1 = require("@angular/http");
    var skillsList_component_1 = require("./skillsList.component");
    var skillsDetail_component_1 = require("./skillsDetail.component");
    var skillsFooter_component_1 = require("./skillsFooter.component");
    var ui_router_ng2_1 = require("ui-router-ng2");
    /**
     * This file defines the states for the `skills` module.
     * The states are exported as an array and imported in the SkillsModule.
     */
    exports.SKILLS_STATES = [
        // A state for the 'app.skills' submodule.
        // - Fills in the unnamed <ui-view> ($default) from `app` state with `SkillsListComponent`
        // - Fills in the footer <ui-view name="footer"> from `app` state with `SkillsFooterComponent`
        // - Fetches skillsList data using a resolve, then the component displays the data
        {
            name: 'app.skills',
            url: '/skills',
            views: {
                $default: { component: skillsList_component_1.SkillsListComponent },
                footer: { component: skillsFooter_component_1.SkillsFooterComponent }
            },
            resolve: [
                // Inject 'http' and fetch all the skills data
                {
                    token: 'skillsList',
                    deps: [http_1.Http],
                    resolveFn: function (http) {
                        return http.get('/data/skillsData.json').map(function (res) { return res.json(); }).toPromise();
                    }
                }
            ]
        },
        // A child state of app.skills
        // - This state fills the unnnamed <ui-view> (in `SkillsListComponent` from  `app.foo` state) with `SkillsDetailsComponent`
        // - Has a parameter :skillsId which appears in the URL
        // - Resolves skillsDetail, then the component displays the data
        {
            name: 'app.skills.details', url: '/?skillsId', component: skillsDetail_component_1.SkillsDetailsComponent,
            resolve: [
                // Inject the skillsList (from the parent) and find the correct
                {
                    token: 'skillsDetail',
                    deps: ['skillsList', ui_router_ng2_1.Transition],
                    resolveFn: function (skillsList, trans) {
                        return skillsList.find(function (item) { return item.id == trans.params().skillsId; });
                    }
                }
            ]
        },
    ];
});
//# sourceMappingURL=skills.states.js.map