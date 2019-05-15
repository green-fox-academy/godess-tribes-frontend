import { NgModule, Component } from '@angular/core';
import { BuildingComponent } from './building/building.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MapComponent } from './map/map.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'settings', component: SettingsComponent},
  { path: 'logout', redirectTo: '/', pathMatch: 'full'},
  { path: 'map', component: MapComponent},
  { path: 'leaderboard', component: LeaderboardComponent},
  { path: 'buildings', component: BuildingComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
