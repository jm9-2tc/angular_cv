import { NgModule } from "@angular/core";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { HttpClient, provideHttpClient } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { RouterModule } from "@angular/router";

import { CvTranslateLoader } from "./services/cv-translations-loader";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

import { MenuComponent } from "./components/menu/menu.component";
import { SiteAboutComponent } from "./components/site-about/site-about.component";
import { SidelinedParagraphComponent } from "./components/sidelined-paragraph/sidelined-paragraph.component";

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';

import { SlidingPanelComponent } from './components/sliding-panel/sliding-panel.component';
import { TechnologyExperienceMarkerComponent } from './components/technology-experience-marker/technology-experience-marker.component';
import { SiteQualificationsComponent } from './components/site-qualifications/site-qualifications.component';
import { QualificationBlockComponent } from './components/qualification-block/qualification-block.component';

@NgModule({
    declarations: [
        AppComponent,
        SidelinedParagraphComponent,
        SiteAboutComponent,
        MenuComponent,
        SlidingPanelComponent,
        TechnologyExperienceMarkerComponent,
        SiteQualificationsComponent,
        QualificationBlockComponent
    ],
    imports: [
        BrowserModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            useDefaultLang: true,
            loader: {
                provide: TranslateLoader,
                useClass: CvTranslateLoader,
                deps: [HttpClient]
            }
        }),
        RouterModule.forRoot(routes),

        // components:

        MatIconModule,
        MatSlideToggleModule,
        MatProgressBarModule,
        MatDividerModule
    ],
    providers: [
        provideClientHydration(),
        provideHttpClient(),
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }