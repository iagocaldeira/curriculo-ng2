import {Http} from "@angular/http";
import {SkillsListComponent} from "./skillsList.component";
import {SkillsDetailsComponent} from "./skillsDetail.component";
import {SkillsFooterComponent} from "./skillsFooter.component";
import {Ng2StateDeclaration, Transition} from "ui-router-ng2";
/**
 * This file defines the states for the `skills` module.
 * The states are exported as an array and imported in the SkillsModule.
 */
export let SKILLS_STATES: Ng2StateDeclaration[] = [
    // A state for the 'app.skills' submodule.
    // - Fills in the unnamed <ui-view> ($default) from `app` state with `SkillsListComponent`
    // - Fills in the footer <ui-view name="footer"> from `app` state with `SkillsFooterComponent`
    // - Fetches skillsList data using a resolve, then the component displays the data
    {
        name: 'app.skills',
        url: '/skills',
        views: {
            $default: { component: SkillsListComponent },
            footer: { component: SkillsFooterComponent }
        },
        resolve: [
          // Inject 'http' and fetch all the skills data
          {
            token: 'skillsList',
            deps: [Http],
            resolveFn: (http: Http) =>
              http.get('/data/skillsData.json').map(res => res.json()).toPromise()
          }
        ]
    },

    // A child state of app.skills
    // - This state fills the unnnamed <ui-view> (in `SkillsListComponent` from  `app.foo` state) with `SkillsDetailsComponent`
    // - Has a parameter :skillsId which appears in the URL
    // - Resolves skillsDetail, then the component displays the data
    {
      name: 'app.skills.details', url: '/?skillsId', component: SkillsDetailsComponent,
      resolve: [
        // Inject the skillsList (from the parent) and find the correct
        {
          token: 'skillsDetail',
          deps: ['skillsList', Transition],
          resolveFn: (skillsList, trans) =>
            skillsList.find(item => item.id == trans.params().skillsId)
        }
      ]
    },
];


