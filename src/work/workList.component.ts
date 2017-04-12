import {Component, Inject} from '@angular/core';

/**
 * This component has "workList" (resolve data) injected into the constructor.
 *
 * It creates a list of uiSref (links) to the work details and highlights the active uiSref
 * It provides a <ui-view> viewport for a child state to fill in
 */

let template = `
<div>
  <div style="margin-left:auto;margin-right:auto;">
    <h3>{{'MENU.WORK' | translate}}</h3>

    <ul> 
      <li *ngFor="let work of works" uiSrefActive="active">
        <a uiSref=".details" [uiParams]="{workId: work.id}">{{work.jobTitle}}</a>
      </li>
    </ul>

    
<ui-view></ui-view>
  </div>
</div>
`;

@Component({
    selector: 'work',
    template: template
})
export class WorkListComponent {
  // resolve data injected by name 'workList' into 'works' property
  constructor(@Inject("workList") public works) { }
}
