import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Input() avatra;
  @Output() taskClick = new EventEmitter<void>();
  constructor() { }
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
