import {Component, Input} from '@angular/core';

/**
 * This component is shown in the footer when any interests state is active.
 * It receives the `interestsList` resolve data and displays the count of interests objects loaded.
 */
@Component({
  selector: 'interests-footer',

  template: `<p class="copyright">{{'FOOTER.INTERESTS' | translate}}</p>`
})
export class InterestsFooterComponent {
  @Input() interestsList;
}
