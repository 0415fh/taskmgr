import { NgModule } from '@angular/core';
import { LoginRoutingModule } from '../login/login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
