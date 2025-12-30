import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
  roles: string[];
  children?: MenuItem[];
  expanded?: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() isSidenavOpen: boolean = true;

  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard', roles: ['admin', 'user'] },
    {
      label: 'Users', icon: 'group', roles: ['admin'], children: [
        { label: 'All Users', icon: 'person', route: '/users/all', roles: ['admin'] },
        { label: 'Add User', icon: 'person_add', route: '/users/add', roles: ['admin'] }
      ],
      route: ''
    },
    { label: 'Products', icon: 'inventory', route: '/products', roles: ['admin', 'user'] },
    { label: 'Reports', icon: 'bar_chart', route: '/reports', roles: ['admin'] },
  ];

  toggleMenu(item: MenuItem) {
    item.expanded = !item.expanded;
  }
}

