import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LinkProviderService } from './link-provider.service';
import { BulletinComponent } from './bulletin/bulletin.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    DashboardComponent,
    BulletinComponent,
    HeaderBannerComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [LinkProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
