import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {trace, Category, UIRouterModule, UIView} from "ui-router-ng2";
import {NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

import {MAIN_STATES} from "./app.states";
import {AppComponent} from "./app.component";
import {WorkModule} from "./work/work.module";
import {EducationModule} from "./education/education.module";
import {SkillsModule} from "./skills/skills.module";
import {InterestsModule} from "./interests/interests.module";
import {LanguagesModule} from "./languages/languages.module";
import { MyRootUIRouterConfig } from "./router.config";
import { SharedModule } from "./shared.module";

// Enables tracing (check the console) of:
// - TRANSITION transition start, redirect, success, error, ignored
// - VIEWCONFIG ui-view component creation/destruction and viewconfig de/activation
trace.enable(Category.TRANSITION, Category.VIEWCONFIG);

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    UIRouterModule.forRoot({
      states: MAIN_STATES,
      otherwise: { state: 'app', params: {} },
      useHash: true,
      configClass: MyRootUIRouterConfig
    }),
    WorkModule,
    EducationModule,
    SkillsModule,
    InterestsModule,
    LanguagesModule,
    SharedModule
  ],
  declarations: [ AppComponent ],
  providers: [
    // Provide a NgModule lazy loading strategy
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
  ],
  bootstrap: [UIView],
})
class RootModule {}

platformBrowserDynamic().bootstrapModule(RootModule);
