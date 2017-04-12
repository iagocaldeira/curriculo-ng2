import {Component, Inject} from '@angular/core';

/**
 * This component has "interestsList" (resolve data) injected into the constructor.
 *
 * It creates a list of uiSref (links) to the interests details and highlights the active uiSref
 * It provides a <ui-view> viewport for a child state to fill in
 */

let template = `
<h3>{{'MENU.INTERESTS' | translate}}</h3>

<ul>
  <li *ngFor="let interest of interests" uiSrefActive="active">
    <a uiSref=".details" [uiParams]="{interestsId: interest.id}">{{interest.name}}</a>
  </li>
</ul>

<ui-view></ui-view>
`;

@Component({
    selector: 'interests',
    template: template
})
export class InterestsListComponent {
  // resolve data injected by name 'interestsList' into 'interests' property
  constructor(@Inject("interestsList") public interests) { }
}
