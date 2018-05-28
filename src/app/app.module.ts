import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { loadSvgResources } from './utils/svg-utils';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { SharedModule } from './shared/shared.module';
import { DragDirective } from './directive/drag-drop/drag.directive';
import { DropDirective } from './directive/drag-drop/drop.directive';
@NgModule({
  declarations: [
    AppComponent,
    DragDirective,
    DropDirective
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LoginModule,
    ProjectModule,
    CoreModule,
    TaskModule,
  ],
  providers: [
    {provide: 'BASE_CONFIG', useValue: {
      uri: 'http://localhost:3000/quotes'
    }}
  ],
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
