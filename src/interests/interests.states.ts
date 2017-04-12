import {Http} from "@angular/http";
import {InterestsListComponent} from "./interestsList.component";
import {InterestsDetailsComponent} from "./interestsDetail.component";
import {InterestsFooterComponent} from "./interestsFooter.component";
import {Ng2StateDeclaration, Transition} from "ui-router-ng2";
/**
 * This file defines the states for the `interests` module.
 * The states are exported as an array and imported in the InterestsModule.
 */
export let INTERESTS_STATES: Ng2StateDeclaration[] = [
    // A state for the 'app.interests' submodule.
    // - Fills in the unnamed <ui-view> ($default) from `app` state with `InterestsListComponent`
    // - Fills in the footer <ui-view name="footer"> from `app` state with `InterestsFooterComponent`
    // - Fetches interestsList data using a resolve, then the component displays the data
    {
        name: 'app.interests',
        url: '/interests',
        views: {
            $default: { component: InterestsListComponent },
            footer: { component: InterestsFooterComponent }
        },
        resolve: [
          // Inject 'http' and fetch all the interests data
          {
            token: 'interestsList',
            deps: [Http],
            resolveFn: (http: Http) =>
              http.get('/data/interestsData.json').map(res => res.json()).toPromise()
          }
        ]
    },

    // A child state of app.interests
    // - This state fills the unnnamed <ui-view> (in `InterestsListComponent` from  `app.foo` state) with `InterestsDetailsComponent`
    // - Has a parameter :interestsId which appears in the URL
    // - Resolves interestsDetail, then the component displays the data
    {
      name: 'app.interests.details', url: '/?interestsId', component: InterestsDetailsComponent,
      resolve: [
        // Inject the interestsList (from the parent) and find the correct
        {
          token: 'interestsDetail',
          deps: ['interestsList', Transition],
          resolveFn: (interestsList, trans) =>
            interestsList.find(item => item.id == trans.params().interestsId)
        }
      ]
    },
];


