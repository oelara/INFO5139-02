import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: User;

  constructor() {
    this.user = new User();
    setInterval(() => {
      //Get the user information from our session storage
      let tmpUser = sessionStorage.getItem('user');
      if (tmpUser != null) {
        this.user = JSON.parse(tmpUser);
      }
      console.log(this.user);
    }, 1000);
  }

  ngOnInit(): void {}

  signout(): void {
    sessionStorage.removeItem('user');
    this.user = new User();
  }
}
