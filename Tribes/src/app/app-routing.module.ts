import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuildingTypeComponent } from './building-type/building-type.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MapComponent } from './map/map.component';
import { SettingsComponent } from './settings/settings.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SoldiersComponent } from './soldiers/soldiers.component';
import { AttackComponent } from './attack/attack.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'settings', component: SettingsComponent},
  { path: 'logout', redirectTo: '/', pathMatch: 'full'},
  { path: 'map', component: MapComponent},
  { path: 'leaderboard', component: LeaderboardComponent},
  { path: 'buildings', component: BuildingsComponent},
  { path: 'mainpage/soldiers', component: SoldiersComponent},
  { path: 'mainpage/attack', component: AttackComponent},
  { path: 'mainpage/:type', component: BuildingTypeComponent},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
