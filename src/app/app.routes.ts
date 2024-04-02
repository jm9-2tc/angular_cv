import { Routes } from '@angular/router';
import { SiteAboutComponent } from './components/site-about/site-about.component';
import { SidelinedParagraphComponent } from './components/sidelined-paragraph/sidelined-paragraph.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/about'},
    {path: 'about', component: SiteAboutComponent},
    {path: 'qualifications', component: SidelinedParagraphComponent},
    {path: 'projects', component: SidelinedParagraphComponent},
    {path: 'contact', component: SidelinedParagraphComponent},
    {path: '**', redirectTo: '/'}
];
