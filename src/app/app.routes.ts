import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
{
path: '',
loadChildren: () => import('./features/pages/pages.routes').then(m => m.PAGES_ROUTES),
},




];