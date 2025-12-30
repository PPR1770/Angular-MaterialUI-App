import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: User | null = null;

  constructor(private router: Router) {}

  login(email: string, password: string) {
    if (email === 'admin@erp.com' && password === 'admin') {
      this.currentUser = { id: 1, name: 'Admin', email, role: 'admin' };
      localStorage.setItem('user', JSON.stringify(this.currentUser));
      return true;
    } else if (email === 'user@erp.com' && password === 'user') {
      this.currentUser = { id: 2, name: 'User', email, role: 'user' };
      localStorage.setItem('user', JSON.stringify(this.currentUser));
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }

  getUser() {
    if (!this.currentUser) {
      const user = localStorage.getItem('user');
      if (user) this.currentUser = JSON.parse(user);
    }
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  hasRole(role: string): boolean {
    return this.getUser()?.role === role;
  }
}
