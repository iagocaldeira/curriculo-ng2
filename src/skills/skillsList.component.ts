import {Component, Inject} from '@angular/core';

/**
 * This component has "skillsList" (resolve data) injected into the constructor.
 *
 * It creates a list of uiSref (links) to the skills details and highlights the active uiSref
 * It provides a <ui-view> viewport for a child state to fill in
 */

let template = `
<h3>{{'MENU.SKILLS' | translate}}</h3>

<ul>
  <li *ngFor="let skill of skills" uiSrefActive="active">
    <a uiSref=".details" [uiParams]="{skillsId: skill.id}">{{skill.name}}</a>
  </li>
</ul>

<ui-view></ui-view>
`;

@Component({
    selector: 'skills',
    template: template
})
export class SkillsListComponent {
  // resolve data injected by name 'skillsList' into 'skills' property
  constructor(@Inject("skillsList") public skills) { }
}
