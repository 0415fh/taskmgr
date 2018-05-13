import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  constructor() { }
  @Output() newTask = new EventEmitter<void>();
  ngOnInit() {
  }
  onNewTaskClick() {
    this.newTask.emit();
  }

}
