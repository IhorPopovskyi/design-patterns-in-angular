import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserBuilder {
  private readonly user: User;

  constructor() {
    this.user = new User();
  }

  withName(name: string): UserBuilder {
    this.user.name = name;
    return this;
  }

  withEmail(email: string): UserBuilder {
    this.user.email = email;
    return this;
  }

  withAge(age: number): UserBuilder {
    this.user.age = age;
    return this;
  }

  build(): User {
    return this.user;
  }
}
