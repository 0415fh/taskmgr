import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { loadSvgResources } from './utils/svg-utils';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    LoginModule,
    ProjectModule,
    CoreModule,
    TaskModule,
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
