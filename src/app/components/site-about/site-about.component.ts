import { Component } from '@angular/core';
import { MainBannerComponent } from "../main-banner/main-banner.component";
import { CvDataService } from '../../services/cv-data/cv-data.service';
import AboutMe from '../../models/about-me.model';
import { SidelinedParagraphComponent } from "../sidelined-paragraph/sidelined-paragraph.component";

@Component({
    selector: 'app-site-about',
    standalone: true,
    templateUrl: './site-about.component.html',
    styleUrl: './site-about.component.scss',
    imports: [MainBannerComponent, SidelinedParagraphComponent]
})
export class SiteAboutComponent {
    aboutMe: AboutMe

    constructor (
        private cvDataService: CvDataService
    ) {
        this.aboutMe = cvDataService.getAboutMe();
    }
}
