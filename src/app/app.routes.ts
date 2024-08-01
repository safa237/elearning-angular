import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmptyComponent } from './pages/empty/empty.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },
    { path: 'empty', component: EmptyComponent },
];

