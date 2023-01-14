import { Component } from '@angular/core';
import { UserClient } from './models/userclient-app';
import { UserClientService } from './services/userclient-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: UserClient[] = []; // Pod zmienną users znajdzie się tablica zainicjalizowana jako pusta
  userToEdit?: UserClient;

  constructor(private userClientService: UserClientService) {}

  ngOnInit() : void {
    this.userClientService
        .getUsers()
        .subscribe((result: UserClient[]) => (this.users = result));
    // this.users = this.userClientService.getUsers();
    // console.log(this.users);
  }

  updateUserList(users: UserClient[]) {
    this.users = users;
  }

  initNewUser() {
    this.userToEdit = new UserClient();
  }

  editUser(user: UserClient) {
    this.userToEdit = user;
  }
}
