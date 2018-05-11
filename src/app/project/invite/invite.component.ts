import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
  items = [
    {
      'name': 'Francis',
      'id': 1
    },
    {
      'name': 'FengHui',
      'id': 2
    },
    {
      'name': 'BeiJing',
      'id': 3
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  displayUser(user: {id: number; name: string}) {
    console.log(user);
    return user ? user.name : '';
  }
}
