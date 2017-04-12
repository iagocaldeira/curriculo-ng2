import {Component, Input} from '@angular/core';

/**
 * This component is shown in the footer when any education state is active.
 * It receives the `educationList` resolve data and displays the count of education objects loaded.
 */
@Component({
  selector: 'education-footer',

  template: `<p class="copyright">{{'FOOTER.EDUCATION' | translate}}</p>`
})
export class EducationFooterComponent {
  @Input() educationList;
}
