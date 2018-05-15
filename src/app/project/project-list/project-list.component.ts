import { Component, OnInit, HostBinding } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { slideToRight } from '../../anims/router.anim';
import {listAnimation} from '../../anims/list.anim';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight, listAnimation]
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      'id': 1,
      'name': '企业协作平台',
      'desc': '企业协作平台',
      'coverImg': 'assets/img/covers/0.jpg',
    },
    {
      'id': 2,
      'name': '自动化测试项目',
      'desc': '企业协作平台',
      'coverImg': 'assets/img/covers/1.jpg',
    },
  ];
  constructor(private dialog: MdDialog) { }
  @HostBinding('@routerAnim') state;
  ngOnInit() {
  }
  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '新增项目'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = [...this.projects,
        { id: 3, name: '新增项目1', desc: '这是一个新项目1', coverImg: 'assets/img/covers/3.jpg'},
        { id: 4, name: '新增项目1', desc: '这是一个新项目1', coverImg: 'assets/img/covers/4.jpg'}
        ];
    });
  }
  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }
  loanchUpdateDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: {title: '编辑项目'}});
  }
  loanchConfirmDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: '删除项目', conten: '您确认删除该项目吗' } });
    dialogRef.afterClosed().subscribe(result => [
      this.projects = this.projects.filter( p => p.id !== project.id)
    ]);
  }
}
