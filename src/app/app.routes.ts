import { Routes } from '@angular/router';
import { SiteAboutComponent } from './components/site-about/site-about.component';

export const routes: Routes = [
    {path: '', component: SiteAboutComponent},
    {path: '**', redirectTo: '/'}
];
