import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { cardAnim } from '../../anims/card.anim';
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnim
  ]
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() Invites = new EventEmitter<void>();
  @Output() editCLick =  new EventEmitter<void>();
  // @Output() onInvite = new EventEmitter<void>();
  @Output() deleteClick = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';
  constructor() { }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
  }
  ngOnInit() {
  }
  onInviteClick() {
    this.Invites.emit();
  }
  onEditClick() {
    this.editCLick.emit();
  }
  onDelClick() {
    this.deleteClick.emit();
  }
}
