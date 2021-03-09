import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user: User;
  authenticated = false;
  authentication_failed = false;

  constructor(private userService: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('form has been submitted!');
  }

  getByEmail() {
    console.log('getByEmail');
    console.log(this.user);
    //Only make a call when user.email is not empty
    if (this.user.email.length > 0 && this.user.password.length > 0) {
      this.userService.getByEmail(this.user.email).subscribe((remote_user) => {
        if (
          remote_user.email == this.user.email &&
          remote_user.password === this.user.password
        ) {
          this.authenticated = true;
          this.authentication_failed = false;
          this.user = remote_user;
          //store user information to display user name on our navigation bar next to signin button
          // hide signin button if already signedin and show signout
          sessionStorage.setItem('user', JSON.stringify(this.user));
          //redirect to home.
          this.router.navigate(['/home']);
        }
      });
    } else {
      this.authentication_failed = true;
    }
  }
}
