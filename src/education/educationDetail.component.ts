import {Component, Input} from '@angular/core';

/**
 * This component injects "educationDetail" (resolve data) into the matching @Input and renders the detail */
let template = `
<h2>{{'DETAILS.EDUCATION.MODULE_TITLE' | translate}}</h2>

<label>{{'DETAILS.EDUCATION.INSTITUTION' | translate}}: </label><p>{{education.institution}}</p><br>
<label>{{'DETAILS.EDUCATION.AREA' | translate}}: </label><p>{{education.area}}</p><br>
<label>{{'DETAILS.EDUCATION.STUDYTYPE' | translate}} : </label><p>{{education.studyType}}</p><br>
<label>{{'DETAILS.EDUCATION.STARTDATE' | translate}} : </label><p>{{education.startDate}}</p><br>
<label>{{'DETAILS.EDUCATION.ENDDATE' | translate}} : </label><p>{{education.endDate}}</p><br>
`;

@Component({
  selector: 'education-detail',
  template: template
})
export class EducationDetailsComponent {
  // `educationDetail` resolve data is provided to this @Input
  @Input('educationDetail') education;
}
