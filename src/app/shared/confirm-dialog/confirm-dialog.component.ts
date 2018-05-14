import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h2 md-dialog-title>{{title}}</h2>
    <div md-dialog-content>{{content}}</div>
    <div md-dialog-actions>
      <button type="button" (click)="onClick(true)" md-raised-button color="primary" >确定</button>
      <button type="button"(click)="onClick(false)" md-button md-dialog-close >取消</button>
    </div>
  `,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {
  title = '';
  content = '';
  constructor(
    @Inject(MD_DIALOG_DATA) private data,
    private dialogRef: MdDialogRef<ConfirmDialogComponent>
  ) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.conten;
  }

  onClick(res: boolean) {
    this.dialogRef.close(res);
  }
}
