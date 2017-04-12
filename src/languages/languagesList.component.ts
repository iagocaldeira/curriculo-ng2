import {Component, Inject} from '@angular/core';

/**
 * This component has "languagesList" (resolve data) injected into the constructor.
 *
 * It creates a list of uiSref (links) to the languages details and highlights the active uiSref
 * It provides a <ui-view> viewport for a child state to fill in
 */

let template = `
<h3>{{'MENU.LANGUAGES' | translate}}</h3>

<ul>
  <li *ngFor="let language of languages" uiSrefActive="active">
    <a uiSref=".details" [uiParams]="{languagesId: language.id}">{{language.language}}</a>
  </li>
</ul>

<ui-view></ui-view>
`;

@Component({
    selector: 'languages',
    template: template
})
export class LanguagesListComponent {
  // resolve data injected by name 'languagesList' into 'languages' property
  constructor(@Inject("languagesList") public languages) { }
}
