import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000/user';

  constructor(private http: HttpClient) {
  }

  addUser(userName, password, cpassword) {
    const obj = {
      userName,
      password,
    };
    console.log(obj);
    if (password === cpassword) {
      this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
    }
  }
  getUsers() {
    return this.http.get(`${this.uri}`);
  }

}
