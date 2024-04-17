import { Injectable } from '@angular/core';
import { User } from './shared/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = [
    {
      id: 1,
      name: 'David',
      username: 'david',
      password: 'abc',
    },
    {
      id: 2,
      name: 'Gia huy',
      username: 'Giahuy',
      password: 'abc',
    },
    {
      id: 3,
      name: 'Gia hao',
      username: 'Gia hao',
      password: 'abc',
    },
    {
      id: 4,
      name: 'Trung hieu',
      username: 'Trung hieu',
      password: 'abc',
    },
  ]
  
  session: any;
  constructor(private router : Router) { 
    let session: any = localStorage.getItem('session');
    if (session) {
      session = JSON.parse(session);
    }

    this.session = session;
   }

  login(username: string, password: string) {
    let user = this.users.find((u) => {
      console.log([u.username,username],[u.password,password])
      return u.username === username && u.password === password
    })
    if (user) {
      this.session = user;
      localStorage.setItem('session', JSON.stringify(this.session))
    }

    return user;
  }

  logout() {
    this.session = undefined;
    localStorage.removeItem('session')

    this.router.navigateByUrl('/');
  }
}
