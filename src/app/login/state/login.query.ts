import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { LoginStore, LoginState } from './login.store';

@Injectable({ providedIn: 'root' })
export class LoginQuery extends QueryEntity<LoginState> {

  constructor(protected override store: LoginStore) {
    super(store);
  }

}
