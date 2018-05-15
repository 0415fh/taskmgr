import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parent: CoreModule,
  ) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载');
    }
  }
 }
