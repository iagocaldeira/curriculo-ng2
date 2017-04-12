(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./app.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var app_component_1 = require("./app.component");
    /** The top level state(s) */
    exports.MAIN_STATES = [
        // The top-level app state.
        // This state fills the root <ui-view></ui-view> (defined in index.html) with the AppComponent
        { name: 'app', component: app_component_1.AppComponent },
    ];
});
//# sourceMappingURL=app.states.js.map