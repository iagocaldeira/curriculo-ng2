import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * The top level application component.
 *
 * This component renders three uiSref "links" and has a viewport for a child to fill in.
 */

let template = `
  <!-- Wrapper -->
	<div id="wrapper">

		<!-- Header -->
		<header id="header">
			<div class="logo">
				<span class="icon fa-diamond"></span>
			</div>
			<div class="content">

				<div class="inner">
					<h1>{{ 'TITLE' | translate }}</h1>
				</div>
			</div>
			<nav>
				<ul>
					<li><a uiSref="app.work" [uiOptions]="{ inherit: false }" uiSrefActive="active" >{{'MENU.WORK' | translate}}</a></li>
					<li><a uiSref="app.education" [uiOptions]="{ inherit: false }" uiSrefActive="active" >{{'MENU.EDUCATION' | translate}}</a></li>
					<li><a uiSref="app.skills" [uiOptions]="{ inherit: false }" uiSrefActive="active" >{{'MENU.SKILLS' | translate}}</a></li>
					<li><a uiSref="app.interests" [uiOptions]="{ inherit: false }" uiSrefActive="active" >{{'MENU.INTERESTS' | translate}}</a></li>
					<li><a uiSref="app.languages" [uiOptions]="{ inherit: false }" uiSrefActive="active" >{{'MENU.LANGUAGES' | translate}}</a></li>
        <li>
              <!-- {{ 'HOME.SELECT' | translate }} -->
              <select #langSelect (change)="translate.use(langSelect.value)">
                <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang }}</option>
              </select>
        </li>
				</ul>
			</nav>
		</header>

		<!-- Main -->
		<div id="main" style="width:500px;padding-top:50px">
      <ui-view></ui-view>
		</div>
    
		<!-- Footer -->
		<footer id="footer">
      <ui-view name="footer"></ui-view>
		</footer>
`;

@Component({
  selector: 'my-app',
  template: template
})
export class AppComponent {
  constructor(public translate: TranslateService) { }
}
