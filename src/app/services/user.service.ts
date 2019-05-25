import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUserProfile() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users', {});
  }

}
