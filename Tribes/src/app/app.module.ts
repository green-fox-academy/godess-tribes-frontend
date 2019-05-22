import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';

import { KingdomComponent } from './kingdom/kingdom.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
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
    PageNotFoundComponent,
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
  entryComponents: [RegisterFormComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthService,
      multi: true
    }
  ]
})

export class AppModule { }
