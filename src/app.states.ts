import {AppComponent} from "./app.component";
import {Ng2StateDeclaration, loadNgModule} from "ui-router-ng2";

/** The top level state(s) */
export let MAIN_STATES: Ng2StateDeclaration[] = [
    // The top-level app state.
    // This state fills the root <ui-view></ui-view> (defined in index.html) with the AppComponent
    { name: 'app', component: AppComponent },

    // This is the Future State for lazy loading the workModule
    // { name: 'app.work', url: '/work', lazyLoad: loadNgModule('src/work/work.module') }
];
