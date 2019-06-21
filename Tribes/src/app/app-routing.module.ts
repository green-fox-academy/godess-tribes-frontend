import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { ResourcesComponent } from './_components/resources/resources.component';
import { BuildingTypeComponent } from './_components/building-type/building-type.component';
import { BuildingsComponent } from './_components/buildings/buildings.component';
import { LeaderboardComponent } from './_components/leaderboard/leaderboard.component';
import { MapComponent } from './_components/map/map.component';
import { SettingsComponent } from './_components/settings/settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './_components/register-form/register-form.component';
import { LoginComponent } from './_components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { KingdomComponent } from './_components/kingdom/kingdom.component';
import { SoldiersComponent } from './_components/soldiers/soldiers.component';
import { BattleComponent } from './_components/battle/battle.component';
import { GenericErrorComponent } from './_components/generic-error/generic-error.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'kingdom', component: KingdomComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'logout', redirectTo: '/login', pathMatch: 'full'},
  { path: 'map', component: MapComponent, canActivate: [AuthGuard] },
  { path: 'leaderboard', component: LeaderboardComponent, canActivate: [AuthGuard] },
  { path: 'buildings', component: BuildingsComponent, canActivate: [AuthGuard] },
  { path: 'kingdom/soldiers', component: SoldiersComponent, canActivate: [AuthGuard] },
  { path: 'kingdom/battle', component: BattleComponent, canActivate: [AuthGuard] },
  { path: 'kingdom/:type', component: BuildingTypeComponent, canActivate: [AuthGuard] },
  { path: 'kingdom/resources', component: ResourcesComponent, canActivate: [AuthGuard] },
  { path: 'leaderboard/buildings', component: LeaderboardComponent, canActivate: [AuthGuard] },
  { path: 'leaderboard/soldiers', component: LeaderboardComponent, canActivate: [AuthGuard] },
  { path: 'error', component: GenericErrorComponent},
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
