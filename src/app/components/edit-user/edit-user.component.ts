import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserClient } from 'src/app/models/userclient-app';
import { UserClientService } from 'src/app/services/userclient-app.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  @Input() user?: UserClient;
  @Output() usersUpdated = new EventEmitter<UserClient[]>();

  /**
   *
   */
  constructor(private userClientService: UserClientService) { }

  createUser(user: UserClient) {
    this.userClientService
        .createUser(user)
        .subscribe((users: UserClient[]) => this.usersUpdated.emit(users));
  }

  updateUser(user: UserClient) {
    this.userClientService
    .updateUser(user)
    .subscribe((users: UserClient[]) => this.usersUpdated.emit(users));
  }

  deleteUser(user: UserClient) {
    this.userClientService
        .deleteUser(user)
        .subscribe((users: UserClient[]) => this.usersUpdated.emit(users));
  }
  
}
