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

import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
    declarations: [
        AppComponent,
        SidelinedParagraphComponent,
        SiteAboutComponent,
        MenuComponent
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

        MatSlideToggleModule
    ],
    providers: [
        provideClientHydration(),
        provideHttpClient(),
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }