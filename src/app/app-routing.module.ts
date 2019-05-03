import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from 'src/component/root/root.component';

const routes: Routes = [
  { path: '', redirectTo: '/root', pathMatch: 'full' },
  { path: 'root', component: RootComponent }
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
