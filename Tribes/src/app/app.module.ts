import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MainpageComponent } from './mainpage/mainpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { StatusboardComponent } from './statusboard/statusboard.component';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { MapComponent } from './map/map.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { BuildingComponent } from './building/building.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    DashboardComponent,
    StatusboardComponent,
    HeaderComponent,
    SettingsComponent,
    MapComponent,
    LeaderboardComponent,
    BuildingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
