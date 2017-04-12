import {Component, Input} from '@angular/core';

/**
 * This component injects "workDetail" (resolve data) into the matching @Input and renders the detail */
let template = `
<h2 class="major">{{'DETAILS.WORK.MODULE_TITLE' | translate}}</h2>

<label>{{'DETAILS.WORK.DATE' | translate}}: </label><p>{{work.date}}</p><br>
<label>{{'DETAILS.WORK.JOBTITLE' | translate}}: </label><p>{{work.jobTitle}}</p><br>
<label>{{'DETAILS.WORK.DESCRIPTION' | translate}}: </label><p>{{work.description}}</p><br>

`;

@Component({
  selector: 'work-detail',
  template: template
})
export class WorkDetailsComponent {
  // `workDetail` resolve data is provided to this @Input
  @Input('workDetail') work;
}
