import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Account } from './account.model';
import { AccountStore } from './account.store';
import {Login} from '../../login/state/login.model';

@Injectable({ providedIn: 'root' })
export class AccountService {

  constructor(private accountStore: AccountStore, private http: HttpClient) {
  }

  getAllAppointmentsForDate(date:string){
    return this.http.post<any>('http://localhost:3000/appointment', {date: date}).pipe(tap(entities => {
      console.log(entities)
    }))

  }


  get() {
    return this.http.get<Account[]>('https://api.com').pipe(tap(entities => {
      this.accountStore.set(entities);
    }));
  }

  add(account: Account) {
    this.accountStore.add(account);
  }

  // update(id, account: Partial<Account>) {
  //   this.accountStore.update(id, account);
  // }

  remove(id: ID) {
    this.accountStore.remove(id);
  }

}
