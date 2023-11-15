import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuModule } from '@progress/kendo-angular-menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WindowComponent } from './window/window.component';
import { PortalModule } from '@angular/cdk/portal';
import { TooltipsModule } from '@progress/kendo-angular-tooltip';
import { ButtonsModule } from '@progress/kendo-angular-buttons';




@NgModule({
  declarations: [
    AppComponent,
    WindowComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    BrowserAnimationsModule,
    PortalModule,
    TooltipsModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
