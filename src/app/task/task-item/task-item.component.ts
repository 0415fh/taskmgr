import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Input() avatra;
  constructor() { }

  ngOnInit() {
    this.avatra = this.item.owner ? this.avatra : 'unassingned';
  }

}
