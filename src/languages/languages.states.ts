import {Http} from "@angular/http";
import {LanguagesListComponent} from "./languagesList.component";
import {LanguagesDetailsComponent} from "./languagesDetail.component";
import {LanguagesFooterComponent} from "./languagesFooter.component";
import {Ng2StateDeclaration, Transition} from "ui-router-ng2";
/**
 * This file defines the states for the `languages` module.
 * The states are exported as an array and imported in the LanguagesModule.
 */
export let LANGUAGES_STATES: Ng2StateDeclaration[] = [
    // A state for the 'app.languages' submodule.
    // - Fills in the unnamed <ui-view> ($default) from `app` state with `LanguagesListComponent`
    // - Fills in the footer <ui-view name="footer"> from `app` state with `LanguagesFooterComponent`
    // - Fetches languagesList data using a resolve, then the component displays the data
    {
        name: 'app.languages',
        url: '/languages',
        views: {
            $default: { component: LanguagesListComponent },
            footer: { component: LanguagesFooterComponent }
        },
        resolve: [
          // Inject 'http' and fetch all the languages data
          {
            token: 'languagesList',
            deps: [Http],
            resolveFn: (http: Http) =>
              http.get('/data/languagesData.json').map(res => res.json()).toPromise()
          }
        ]
    },

    // A child state of app.languages
    // - This state fills the unnnamed <ui-view> (in `LanguagesListComponent` from  `app.foo` state) with `LanguagesDetailsComponent`
    // - Has a parameter :languagesId which appears in the URL
    // - Resolves languagesDetail, then the component displays the data
    {
      name: 'app.languages.details', url: '/?languagesId', component: LanguagesDetailsComponent,
      resolve: [
        // Inject the languagesList (from the parent) and find the correct
        {
          token: 'languagesDetail',
          deps: ['languagesList', Transition],
          resolveFn: (languagesList, trans) =>
            languagesList.find(item => item.id == trans.params().languagesId)
        }
      ]
    },
];


