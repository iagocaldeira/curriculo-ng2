import {Component, Input} from '@angular/core';

/**
 * This component injects "skillsDetail" (resolve data) into the matching @Input and renders the detail */
let template = `
<h2>{{'DETAILS.SKILLS.MODULE_TITLE' | translate}}</h2>

<label>{{'DETAILS.SKILLS.NAME' | translate}}: </label><p>{{skills.name}}</p><br>
<label>{{'DETAILS.SKILLS.LEVEL' | translate}}: </label><p>{{skills.level}}</p><br>
<label>{{'DETAILS.SKILLS.KEYWORDS' | translate}}: </label>
  <ul>
  <li *ngFor="let keyword of skills.keywords" uiSrefActive="active">
    {{keyword}}
  </li>
</ul>
`;

@Component({
  selector: 'skills-detail',
  template: template
})
export class SkillsDetailsComponent {
  // `skillsDetail` resolve data is provided to this @Input
  @Input('skillsDetail') skills;
}
