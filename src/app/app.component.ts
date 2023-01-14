import { Component } from '@angular/core';
import { UserClient } from './models/userclient-app';
import { UserClientService } from './services/userclient-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testuje UserClientApp.UI';
  users: UserClient[] = []; // Pod zmienną users znajdzie się tablica zainicjalizowana jako pusta

  constructor(private userClientService: UserClientService) {}

  ngOnInit() : void {
    this.users = this.userClientService.getUsers();
    console.log(this.users);
  }
}
