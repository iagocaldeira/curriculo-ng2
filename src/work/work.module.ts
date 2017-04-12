import {UIRouterModule} from "ui-router-ng2";
import {SharedModule} from "../shared.module";
import {WORK_STATES} from "./work.states";
import {NgModule} from "@angular/core";
import {WorkListComponent} from "./workList.component";
import {WorkDetailsComponent} from "./workDetail.component";
import {WorkFooterComponent} from "./workFooter.component";

/** The Work NgModule */
@NgModule({
  imports: [
    SharedModule,
    UIRouterModule.forChild({ states: WORK_STATES })
  ],
  declarations: [
    WorkListComponent,
    WorkDetailsComponent,
    WorkFooterComponent,
  ]
})
export class WorkModule { }

