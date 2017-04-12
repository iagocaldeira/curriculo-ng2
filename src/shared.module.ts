import { NgModule } from "@angular/core";
import { HttpModule, Http } from "@angular/http";
import { CommonModule } from "@angular/common";
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, 'i18n/', '.json');
}

/** MyCommon Module: Re-exports BrowserModule and HttpModule */
@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http],
      },
      isolate: false
    })
  ],
  exports: [CommonModule, HttpModule, TranslateModule],
})
export class SharedModule {
     constructor(private translate: TranslateService) {
        translate.addLangs(["en", "pt"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|pt/) ? browserLang : 'en');
    }
 }
