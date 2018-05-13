import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
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
            completed: true,
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
          completed: true,
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
          completed: true,
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
          completed: true,
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

  ngOnInit() {
  }
  launchTaskDialog() {
    this.dialog.open(NewTaskComponent);
  }
}
