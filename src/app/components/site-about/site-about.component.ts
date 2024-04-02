import { Component } from '@angular/core';

import { SidelinedParagraphComponent } from "../sidelined-paragraph/sidelined-paragraph.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-site-about',
    standalone: false,
    templateUrl: './site-about.component.html',
    styleUrl: './site-about.component.scss'
})
export class SiteAboutComponent {
    constructor (translate: TranslateService) {
        console.log(translate.getTranslation(''));
    }
}
