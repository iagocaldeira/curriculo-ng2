import {Component, Inject} from '@angular/core';

/**
 * This component has "educationList" (resolve data) injected into the constructor.
 *
 * It creates a list of uiSref (links) to the education details and highlights the active uiSref
 * It provides a <ui-view> viewport for a child state to fill in
 */

let template = `
<h3>{{'MENU.EDUCATION' | translate}}</h3>

<ul>
  <li *ngFor="let education of educations" uiSrefActive="active">
    <a uiSref=".details" [uiParams]="{educationId: education.id}">{{education.institution}}</a>
  </li>
</ul>

<ui-view></ui-view>
`;

@Component({
    selector: 'education',
    template: template
})
export class EducationListComponent {
  // resolve data injected by name 'educationList' into 'educations' property
  constructor(@Inject("educationList") public educations) { }
}
