import {Http} from "@angular/http";
import {EducationListComponent} from "./educationList.component";
import {EducationDetailsComponent} from "./educationDetail.component";
import {EducationFooterComponent} from "./educationFooter.component";
import {Ng2StateDeclaration, Transition} from "ui-router-ng2";
/**
 * This file defines the states for the `education` module.
 * The states are exported as an array and imported in the EducationModule.
 */
export let EDUCATION_STATES: Ng2StateDeclaration[] = [
    // A state for the 'app.education' submodule.
    // - Fills in the unnamed <ui-view> ($default) from `app` state with `EducationListComponent`
    // - Fills in the footer <ui-view name="footer"> from `app` state with `EducationFooterComponent`
    // - Fetches educationList data using a resolve, then the component displays the data
    {
        name: 'app.education',
        url: '/education',
        views: {
            $default: { component: EducationListComponent },
            footer: { component: EducationFooterComponent }
        },
        resolve: [
          // Inject 'http' and fetch all the education data
          {
            token: 'educationList',
            deps: [Http],
            resolveFn: (http: Http) =>
              http.get('/data/educationData.json').map(res => res.json()).toPromise()
          }
        ]
    },

    // A child state of app.education
    // - This state fills the unnnamed <ui-view> (in `EducationListComponent` from  `app.foo` state) with `EducationDetailsComponent`
    // - Has a parameter :educationId which appears in the URL
    // - Resolves educationDetail, then the component displays the data
    {
      name: 'app.education.details', url: '/?educationId', component: EducationDetailsComponent,
      resolve: [
        // Inject the educationList (from the parent) and find the correct
        {
          token: 'educationDetail',
          deps: ['educationList', Transition],
          resolveFn: (educationList, trans) =>
            educationList.find(item => item.id == trans.params().educationId)
        }
      ]
    },
];


