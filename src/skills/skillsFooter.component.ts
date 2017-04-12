import {Component, Input} from '@angular/core';

/**
 * This component is shown in the footer when any skills state is active.
 * It receives the `skillsList` resolve data and displays the count of skills objects loaded.
 */
@Component({
  selector: 'skills-footer',

  template: `<p class="copyright">{{'FOOTER.SKILLS' | translate}}</p>`
})
export class SkillsFooterComponent {
  @Input() skillsList;
}
