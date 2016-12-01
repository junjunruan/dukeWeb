import { Routes } from '@angular/router';
import { PageNotFoundCmp } from './PageNotFoundCmp';
import { HomeCmp } from './home/HomeCmp';
import { PortfolioCmp } from './portfolio/PortfolioCmp';
import { ContactCmp } from './contact/ContactCmp';
import { AboutCmp } from './about/AboutCmp';
import { ResumeCmp } from './resume/ResumeCmp';
import { RoutesPathName } from './RoutesPathName';

// The router uses a first-match wins strategy when matching routes,
// so more specific routes should be placed above less specific routes.
export const AppRoutes: Routes = [
    { path: RoutesPathName.home, component: HomeCmp},
    { path: RoutesPathName.about, component: AboutCmp},
    { path: RoutesPathName.contact, component: ContactCmp},
    { path: RoutesPathName.portfolio, component: PortfolioCmp},
    { path: RoutesPathName.resume, component: ResumeCmp},
    { path: '', component: HomeCmp },
    { path: '**', component: PageNotFoundCmp }
];
