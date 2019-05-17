import { ResourcesComponent } from './resources/resources.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuildingTypeComponent } from './building-type/building-type.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MapComponent } from './map/map.component';
import { SettingsComponent } from './settings/settings.component';
import { KingdomComponent } from './kingdom/kingdom.component';
import { SoldiersComponent } from './soldiers/soldiers.component';
import { BattleComponent } from './battle/battle.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'kingdom', component: KingdomComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'logout', redirectTo: '/', pathMatch: 'full'},
  { path: 'map', component: MapComponent},
  { path: 'leaderboard', component: LeaderboardComponent},
  { path: 'buildings', component: BuildingsComponent},
  { path: 'kingdom/soldiers', component: SoldiersComponent},
  { path: 'kingdom/battle', component: BattleComponent},
  { path: 'kingdom/:type', component: BuildingTypeComponent},
  { path: 'kingdom/resources', component: ResourcesComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
