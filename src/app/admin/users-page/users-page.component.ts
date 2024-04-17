import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})

export class UsersPageComponent {
  constructor(private authService: AuthService) {

  }

  logout() {
    this.authService.logout();
  }
}
