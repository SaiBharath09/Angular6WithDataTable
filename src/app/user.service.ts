import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "./user";
import { LoginRequest } from './login.request';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/users';

  login(loginRequest: LoginRequest): Observable<any>{
    return this.http.post(this.baseUrl + '/login', loginRequest);
  }

  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
