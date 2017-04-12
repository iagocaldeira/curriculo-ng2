import {UIRouterModule} from "ui-router-ng2";
import {SharedModule} from "../shared.module";
import {EDUCATION_STATES} from "./education.states";
import {NgModule} from "@angular/core";
import {EducationListComponent} from "./educationList.component";
import {EducationDetailsComponent} from "./educationDetail.component";
import {EducationFooterComponent} from "./educationFooter.component";

/** The Education NgModule */
@NgModule({
  imports: [
    SharedModule,
    UIRouterModule.forChild({ states: EDUCATION_STATES })
  ],
  declarations: [
    EducationListComponent,
    EducationDetailsComponent,
    EducationFooterComponent,
  ]
})
export class EducationModule { }

