import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserClient } from '../models/userclient-app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserClientService {
  url = "UserClient";

  constructor(private http: HttpClient) { }

  public getUsers() : Observable<UserClient []> {
    return this.http.get<UserClient[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateUser(user: UserClient) : Observable<UserClient []> {
    return this.http.put<UserClient[]>(`${environment.apiUrl}/${this.url}`, user);
  }

  public createUser(user: UserClient) : Observable<UserClient []> {
    return this.http.post<UserClient[]>(`${environment.apiUrl}/${this.url}`, user);
  }

  public deleteUser(user: UserClient) : Observable<UserClient []> {
    return this.http.delete<UserClient[]>(`${environment.apiUrl}/${this.url}/${user.id}`);
  }


}
