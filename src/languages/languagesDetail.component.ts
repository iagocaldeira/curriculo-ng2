import {Component, Input} from '@angular/core';

/**
 * This component injects "languagesDetail" (resolve data) into the matching @Input and renders the detail */
let template = `
<h2>{{'DETAILS.LANGUAGES.MODULE_TITLE' | translate}}</h2>

<label>{{'DETAILS.LANGUAGES.LANGUAGE' | translate}}: </label><p>{{languages.language}}</p><br>
<label>{{'DETAILS.LANGUAGES.FLUENCY' | translate}}: </label><p>{{languages.fluency}}</p><br>

`;

@Component({
  selector: 'languages-detail',
  template: template
})
export class LanguagesDetailsComponent {
  // `languagesDetail` resolve data is provided to this @Input
  @Input('languagesDetail') languages;
}
