import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';

import { KingdomComponent } from './_components/kingdom/kingdom.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { RegisterFormComponent } from './_components/register-form/register-form.component';
import { LoginComponent } from './_components/login/login.component';
import { LoginFormComponent } from './_components/login-form/login-form.component';
import { StatusboardComponent } from './_components/statusboard/statusboard.component';
import { HeaderComponent } from './_components/header/header.component';
import { SettingsComponent } from './_components/settings/settings.component';
import { MapComponent } from './_components/map/map.component';
import { LeaderboardComponent } from './_components/leaderboard/leaderboard.component';
import { BuildingsComponent } from './_components/buildings/buildings.component';
import { ResourcesComponent } from './_components/resources/resources.component';
import { BuildingTypeComponent } from './_components/building-type/building-type.component';
import { SoldiersComponent } from './_components/soldiers/soldiers.component';
import { BattleComponent } from './_components/battle/battle.component';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { NotificationsComponent } from './_components/notifications/notifications.component';
import { NotificationComponent } from './_components/notification/notification.component';
import { AddNewBadgeComponent } from './_components/add-new-badge/add-new-badge.component';
import { ServerErrorInterceptor } from './interceptors/server-error-interceptor';
import { GenericErrorComponent } from './_components/generic-error/generic-error.component';
import { ProgressBarComponent } from './_components/progress-bar/progress-bar.component';
import { AddNewSoldierBadgeComponent } from './_components/add-new-soldier-badge/add-new-soldier-badge.component';

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
    PageNotFoundComponent,
    NotificationsComponent,
    NotificationComponent,
    AddNewBadgeComponent,
    GenericErrorComponent,
    ProgressBarComponent,
    AddNewSoldierBadgeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule,
    ShowHidePasswordModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [RegisterFormComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true
    }
  ]
})

export class AppModule { }
