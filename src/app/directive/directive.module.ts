import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDirective } from './drag-drop/drop.directive';
import { DragDirective } from './drag-drop/drag.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DropDirective, DragDirective]
})
export class DirectiveModule { }
