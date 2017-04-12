import {UIRouterModule} from "ui-router-ng2";
import {SharedModule} from "../shared.module";
import {SKILLS_STATES} from "./skills.states";
import {NgModule} from "@angular/core";
import {SkillsListComponent} from "./skillsList.component";
import {SkillsDetailsComponent} from "./skillsDetail.component";
import {SkillsFooterComponent} from "./skillsFooter.component";

/** The Skills NgModule */
@NgModule({
  imports: [
    SharedModule,
    UIRouterModule.forChild({ states: SKILLS_STATES })
  ],
  declarations: [
    SkillsListComponent,
    SkillsDetailsComponent,
    SkillsFooterComponent,
  ]
})
export class SkillsModule { }

