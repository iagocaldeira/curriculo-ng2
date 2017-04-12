import {Component, Input} from '@angular/core';

/**
 * This component is shown in the footer when any languages state is active.
 * It receives the `languagesList` resolve data and displays the count of languages objects loaded.
 */
@Component({
  selector: 'languages-footer',

  template: `<p class="copyright">{{'FOOTER.LANGUAGES' | translate}}</p>`
})
export class LanguagesFooterComponent {
  @Input() languagesList;
}
