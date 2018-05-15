import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { itemAnim } from '../../anims/item.anim';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [itemAnim]
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Input() avatra;
  @Output() taskClick = new EventEmitter<void>();
  widerIn = 'inWidth';
  constructor() { }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.widerIn = 'inWidth';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.widerIn = 'outWidth';
  }
  ngOnInit() {
    this.avatra = this.item.owner ? this.avatra : 'unassingned';
  }
  onItemClick() {
    this.taskClick.emit();
  }
  onCheckBoxClick(ev: Event) {
     ev.stopPropagation();
  }
}
