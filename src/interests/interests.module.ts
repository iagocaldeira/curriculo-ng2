import {UIRouterModule} from "ui-router-ng2";
import {SharedModule} from "../shared.module";
import {INTERESTS_STATES} from "./interests.states";
import {NgModule} from "@angular/core";
import {InterestsListComponent} from "./interestsList.component";
import {InterestsDetailsComponent} from "./interestsDetail.component";
import {InterestsFooterComponent} from "./interestsFooter.component";

/** The Interests NgModule */
@NgModule({
  imports: [
    SharedModule,
    UIRouterModule.forChild({ states: INTERESTS_STATES })
  ],
  declarations: [
    InterestsListComponent,
    InterestsDetailsComponent,
    InterestsFooterComponent,
  ]
})
export class InterestsModule { }

