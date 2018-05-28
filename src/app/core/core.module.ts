import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ServicesModule } from '../services/services.module';
@NgModule({
  imports: [
    SharedModule,
    HttpModule,
    BrowserAnimationsModule,
    ServicesModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule,
  ],
  providers: [
    { provide: 'BASE_CONFIG', useValue: {
      uri: 'http://localhost:3000'
    }}
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
