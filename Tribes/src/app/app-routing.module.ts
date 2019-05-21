import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResourcesComponent } from './resources/resources.component';
import { BuildingTypeComponent } from './building-type/building-type.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MapComponent } from './map/map.component';
import { SettingsComponent } from './settings/settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { KingdomComponent } from './kingdom/kingdom.component';
import { SoldiersComponent } from './soldiers/soldiers.component';
import { BattleComponent } from './battle/battle.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'kingdom', component: KingdomComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'logout', redirectTo: '/', pathMatch: 'full'},
  { path: 'map', component: MapComponent, canActivate: [AuthGuard] },
  { path: 'leaderboard', component: LeaderboardComponent, canActivate: [AuthGuard] },
  { path: 'buildings', component: BuildingsComponent, canActivate: [AuthGuard] },
  { path: 'kingdom/soldiers', component: SoldiersComponent, canActivate: [AuthGuard] },
  { path: 'kingdom/battle', component: BattleComponent, canActivate: [AuthGuard] },
  { path: 'kingdom/:type', component: BuildingTypeComponent, canActivate: [AuthGuard] },
  { path: 'kingdom/resources', component: ResourcesComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
