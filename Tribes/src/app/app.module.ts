import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SettingsComponent } from './settings/settings.component';
import { MapComponent } from './map/map.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { BuildingComponent } from './building/building.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    MainpageComponent,
    RegisterFormComponent,
    HeaderComponent,
    SettingsComponent,
    MapComponent,
    LeaderboardComponent,
    BuildingComponent
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
