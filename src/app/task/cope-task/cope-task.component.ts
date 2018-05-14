import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-cope-task',
  templateUrl: './cope-task.component.html',
  styleUrls: ['./cope-task.component.scss']
})
export class CopeTaskComponent implements OnInit {
  lists: any[] = [];
  constructor(
    @Inject(MD_DIALOG_DATA) private data,
    private dialogRef: MdDialogRef<CopeTaskComponent>
  ) { }

  ngOnInit() {
    this.lists = this.data.lists;
  }

}
