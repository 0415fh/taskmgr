import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  constructor() { }
  @Output() newTask = new EventEmitter<void>();
  @Output() moveAll = new EventEmitter<void>();
  @Output() delList = new EventEmitter<void>();
  @Output() editList = new EventEmitter<void>();
  ngOnInit() {
  }
  onNewTaskClick() {
    this.newTask.emit();
  }
  onMoveAllClick() {
    this.moveAll.emit();
  }
  onDelListClick() {
    this.delList.emit();
  }
  onEditListClick() {
    // console.log('helloworld');
    this.editList.emit();
  }
}
