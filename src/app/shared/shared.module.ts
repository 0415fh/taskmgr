import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdListModule
} from '@angular/material';
@NgModule({
  imports: [
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
  ],
  exports: [
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
  ],
  declarations: []
})
export class SharedModule { }
