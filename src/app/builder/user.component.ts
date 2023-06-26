import { Component } from '@angular/core';
import { User } from './user.model';
import { UserBuilder } from './user.builder';

@Component({
  selector: 'app-user',
  template: `
    <h2>User Details</h2>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Age: {{ user.age }}</p>
  `
})
export class UserComponent {
  user: User;

  constructor(private userBuilder: UserBuilder) {
    this.user = userBuilder
      .withName('John Doe')
      .withEmail('johndoe@example.com')
      .withAge(25)
      .build();
  }
}
