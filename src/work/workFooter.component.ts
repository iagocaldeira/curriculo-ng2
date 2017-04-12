import { Component, Input } from '@angular/core';

/**
 * This component is shown in the footer when any work state is active.
 * It receives the `workList` resolve data and displays the count of work objects loaded.
 */
@Component({
  selector: 'work-footer',

  template: `<p class="copyright">{{'FOOTER.WORK' | translate}}</p>`
})
export class WorkFooterComponent {
  @Input() workList;
}