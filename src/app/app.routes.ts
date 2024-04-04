import { Routes } from '@angular/router';
import { SiteAboutComponent } from './components/site-about/site-about.component';
import { SidelinedParagraphComponent } from './components/sidelined-paragraph/sidelined-paragraph.component';
import { SiteQualificationsComponent } from './components/site-qualifications/site-qualifications.component';
import { SiteProjectsComponent } from './components/site-projects/site-projects.component';
import { SiteContactComponent } from './components/site-contact/site-contact.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/about'},
    {path: 'about', component: SiteAboutComponent},
    {path: 'qualifications', component: SiteQualificationsComponent},
    {path: 'projects', component: SiteProjectsComponent},
    {path: 'contact', component: SiteContactComponent},
    {path: '**', redirectTo: '/'}
];
