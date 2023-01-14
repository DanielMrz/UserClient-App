import { Injectable } from '@angular/core';
import { UserClient } from '../models/userclient-app';

@Injectable({
  providedIn: 'root'
})
export class UserClientService {

  constructor() { }
  // getUsers zwraca tablice
  public getUsers() : UserClient[] {
    let user = new UserClient();
    user.id = 1;
    user.nickName = "TestowyNick01";
    user.firstName = "User";
    user.lastName = "One";
    user.city = "Wrocław";
    
    return [user];
  }
}
