import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DashboardMockService {

  getStats() {
    return [
      { title: 'Total Users', value: 1250, icon: 'group', color: 'primary' },
      { title: 'Products', value: 320, icon: 'inventory', color: 'accent' },
      { title: 'Orders', value: 780, icon: 'shopping_cart', color: 'warn' },
      { title: 'Revenue', value: '$52,400', icon: 'attach_money', color: 'primary' }
    ];
  }

  getSalesData() {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      data: [12000, 15000, 18000, 14000, 21000, 24000]
    };
  }

  getRecentActivities() {
    return [
      { title: 'New user registered', time: '5 minutes ago' },
      { title: 'Order #1021 placed', time: '20 minutes ago' },
      { title: 'Product stock updated', time: '1 hour ago' }
    ];
  }

  getTopProducts() {
    return [
      { name: 'Laptop Pro', sales: '$12,500' },
      { name: 'Smart Watch', sales: '$8,200' },
      { name: 'Wireless Headphones', sales: '$5,900' }
    ];
  }
}
