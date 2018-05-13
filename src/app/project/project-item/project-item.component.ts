import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() Invites = new EventEmitter<void>();
  // @Output() onInvite = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onInviteClick() {
    this.Invites.emit();
  }

}