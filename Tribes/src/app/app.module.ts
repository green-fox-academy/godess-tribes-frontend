import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';

import { KingdomComponent } from './kingdom/kingdom.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { StatusboardComponent } from './statusboard/statusboard.component';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { MapComponent } from './map/map.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { ResourcesComponent } from './resources/resources.component';
import { BuildingTypeComponent } from './building-type/building-type.component';
import { SoldiersComponent } from './soldiers/soldiers.component';
import { BattleComponent } from './battle/battle.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    KingdomComponent,
    DashboardComponent,
    StatusboardComponent,
    HeaderComponent,
    SettingsComponent,
    MapComponent,
    LeaderboardComponent,
    BuildingsComponent,
    ResourcesComponent,
    BuildingTypeComponent,
    SoldiersComponent,
    BattleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [RegisterFormComponent]
})

export class AppModule { }
