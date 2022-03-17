import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Login } from './login.model';
import { LoginStore } from './login.store';

@Injectable({ providedIn: 'root' })
export class LoginService {

  constructor(private loginStore: LoginStore, private http: HttpClient) {
  }

  authenticate(email: string, password: number){
    return this.http.post<Login[]>('http://localhost:3000/login', {email, password}).pipe(tap(entities => {
      this.loginStore.add(entities);
    }))
  }


  get() {
    return this.http.get<Login[]>('https://api.com').pipe(tap(entities => {
      this.loginStore.set(entities);
    }));
  }

  add(login: Login) {
    this.loginStore.add(login);
  }

  // update(id, login: Partial<Login>) {
  //   this.loginStore.update(id, login);
  // }

  remove(id: ID) {
    this.loginStore.remove(id);
  }

}
