import {UIRouterModule} from "ui-router-ng2";
import {SharedModule} from "../shared.module";
import {LANGUAGES_STATES} from "./languages.states";
import {NgModule} from "@angular/core";
import {LanguagesListComponent} from "./languagesList.component";
import {LanguagesDetailsComponent} from "./languagesDetail.component";
import {LanguagesFooterComponent} from "./languagesFooter.component";

/** The Languages NgModule */
@NgModule({
  imports: [
    SharedModule,
    UIRouterModule.forChild({ states: LANGUAGES_STATES })
  ],
  declarations: [
    LanguagesListComponent,
    LanguagesDetailsComponent,
    LanguagesFooterComponent,
  ]
})
export class LanguagesModule { }

