import { Component, OnInit, HostBinding } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopeTaskComponent } from '../cope-task/cope-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { slideToRight } from '../../anims/router.anim';
@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [slideToRight]
})
export class TaskHomeComponent implements OnInit {
  lists = [
    {
      id: 1,
      name: '待办',
      task: [
        {
          id: 1,
          desc: '任务一：去奶茶店买咖啡',
          owner: {
            id: 1,
            name: 'FengHui',
            avatar: 'avatars:svg-11',
            completed: false,
          },
          youxian: 2,
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 2,
          desc: '任务二：去服装店买奶茶',
          completed: false,
          youxian: 3,
          owner: {
            id: 2,
            name: 'WangLi',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        },
        {
          id: 3,
          desc: '任务三：区咖啡店买水果',
          completed: false,
          youxian: 1,
          owner: {
            id: 3,
            name: 'FengShui',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 4,
          desc: '任务四：去水果店买零食',
          completed: false,
          youxian: 4,
          owner: {
            id: 4,
            name: 'FengXu',
            avatar: 'avatars:svg-14'
          },
          dueDate: new Date(),
        }
      ]
    },
    {
      id: 2,
      name: '你好',
      task: [
        {
          id: 1,
          desc: '任务一：去揍特朗普',
          completed: false,
          youxian: 2,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务二：找安倍给你提鞋',
          completed: false,
          youxian: 3,
          owner: {
            id: 2,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 3,
          desc: '任务三：找马克龙给你倒茶',
          completed: false,
          youxian: 1,
          owner: {
            id: 3,
            name: '王五',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date(),
        }
      ]
    }
  ];
  constructor(
    private dialog: MdDialog
  ) { }
  @HostBinding('@routerAnim') state;

  ngOnInit() {
  }
  launchTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskComponent, { data: { title: '修改任务：' } });
  }
  launchCopyTaskDialog() {
    console.log(23);
    const dialogRef = this.dialog.open(CopeTaskComponent, {data: { lists: this.lists}});
  }
  loanchUpdateTaskDialog(task) {
    console.log(task);
    const dialogRef = this.dialog.open(NewTaskComponent, { data: { title: '修改任务：', task: task }});
  }
  launchDelListDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: '删除任务列表', conten: '您确认删除该任务列表吗' } });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  launchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: { title: '更改列表名称' } });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  launchNewListDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: '新建列表'} });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}
