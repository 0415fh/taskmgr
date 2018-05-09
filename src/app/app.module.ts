import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdSidenavModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { loadSvgResources } from './utils/svg-utils';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MdSidenavModule,
    HttpModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ir: MdIconRegistry,
    ds: DomSanitizer
  ) {
    loadSvgResources(ir, ds);
  }
}
