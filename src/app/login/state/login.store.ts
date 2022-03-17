import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Login } from './login.model';

export interface LoginState extends EntityState<Login> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'login' ,idKey: 'email'})
export class LoginStore extends EntityStore<LoginState> {

  constructor() {
    super();
  }

}
