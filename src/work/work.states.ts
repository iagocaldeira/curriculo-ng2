import {Http} from "@angular/http";
import {WorkListComponent} from "./workList.component";
import {WorkDetailsComponent} from "./workDetail.component";
import {WorkFooterComponent} from "./workFooter.component";
import {Ng2StateDeclaration, Transition} from "ui-router-ng2";
/**
 * This file defines the states for the `work` module.
 * The states are exported as an array and imported in the WorkModule.
 */
export let WORK_STATES: Ng2StateDeclaration[] = [
    // A state for the 'app.work' submodule.
    // - Fills in the unnamed <ui-view> ($default) from `app` state with `WorkListComponent`
    // - Fills in the footer <ui-view name="footer"> from `app` state with `WorkFooterComponent`
    // - Fetches workList data using a resolve, then the component displays the data
    {
        name: 'app.work',
        url: '/work',
        views: {
            $default: { component: WorkListComponent },
            footer: { component: WorkFooterComponent }
        },
        resolve: [
          // Inject 'http' and fetch all the work data
          {
            token: 'workList',
            deps: [Http],
            resolveFn: (http: Http) =>
              http.get('/data/workData.json').map(res => res.json()).toPromise()
          }
        ]
    },

    // A child state of app.work
    // - This state fills the unnnamed <ui-view> (in `WorkListComponent` from  `app.foo` state) with `WorkDetailsComponent`
    // - Has a parameter :workId which appears in the URL
    // - Resolves workDetail, then the component displays the data
    {
      name: 'app.work.details', url: '/?workId', component: WorkDetailsComponent,
      resolve: [
        // Inject the workList (from the parent) and find the correct
        {
          token: 'workDetail',
          deps: ['workList', Transition],
          resolveFn: (workList, trans) =>
            workList.find(item => item.id == trans.params().workId)
        }
      ]
    },
];


