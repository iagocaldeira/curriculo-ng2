import {Component, Input} from '@angular/core';

/**
 * This component injects "interestsDetail" (resolve data) into the matching @Input and renders the detail */
let template = `
<h2>{{'DETAILS.INTERESTS.MODULE_TITLE' | translate}}</h2>

<label>{{'DETAILS.INTERESTS.NAME' | translate}}: </label><p>{{interests.name}}</p><br>
<label>{{'DETAILS.INTERESTS.KEYWORDS' | translate}}: </label>
  <ul>
  <li *ngFor="let keyword of interests.keywords" uiSrefActive="active">
    <p>{{keyword}}</p>
  </li>
</ul>`;

@Component({
  selector: 'interests-detail',
  template: template
})
export class InterestsDetailsComponent {
  // `interestsDetail` resolve data is provided to this @Input
  @Input('interestsDetail') interests;
}
