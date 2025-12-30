import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var Chart: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('salesChart') salesChartRef!: ElementRef;
  @ViewChild('revenueChart') revenueChartRef!: ElementRef;
  @ViewChild('ordersChart') ordersChartRef!: ElementRef;
  @ViewChild('productsChart') productsChartRef!: ElementRef;

  stats = [
    { title: 'Users', value: 1450, icon: 'people', color: '#4CAF50' },
    { title: 'Orders', value: 324, icon: 'shopping_cart', color: '#2196F3' },
    { title: 'Revenue', value: '$12,400', icon: 'attach_money', color: '#FF9800' },
    { title: 'Products', value: 78, icon: 'inventory_2', color: '#9C27B0' },
  ];

  recentOrders = [
    { id: 'ORD001', customer: 'Alice', amount: '$120', status: 'Completed' },
    { id: 'ORD002', customer: 'Bob', amount: '$80', status: 'Pending' },
    { id: 'ORD003', customer: 'Charlie', amount: '$220', status: 'Completed' },
    { id: 'ORD004', customer: 'Daisy', amount: '$150', status: 'Cancelled' },
  ];

  topProducts = [
    { name: 'Laptop', sold: 120 },
    { name: 'Phone', sold: 200 },
    { name: 'Headphones', sold: 75 },
    { name: 'Monitor', sold: 50 },
  ];

  activities = [
    { user: 'Alice', action: 'placed an order', time: '2 mins ago' },
    { user: 'Bob', action: 'registered', time: '30 mins ago' },
    { user: 'Charlie', action: 'completed a purchase', time: '1 hour ago' },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Bar chart - Monthly Sales
    const salesCtx = this.salesChartRef.nativeElement.getContext('2d');
    new Chart(salesCtx, {
      type: 'bar',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun'],
        datasets: [{ label: 'Sales', data: [12000,15000,18000,22000,25000,27000], backgroundColor: '#2196F3' }]
      },
      options: { responsive: true, legend: { display: false } }
    });

    // Line chart - Revenue Trend
    const revenueCtx = this.revenueChartRef.nativeElement.getContext('2d');
    new Chart(revenueCtx, {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun'],
        datasets: [{
          label: 'Revenue',
          data: [10000,12000,15000,18000,20000,24000],
          backgroundColor: 'rgba(255,152,0,0.3)',
          borderColor: '#FF9800',
          borderWidth: 2,
          fill: true
        }]
      },
      options: { responsive: true, legend: { display: false } }
    });

    // Pie chart - Orders
    const ordersCtx = this.ordersChartRef.nativeElement.getContext('2d');
    new Chart(ordersCtx, {
      type: 'pie',
      data: {
        labels: ['Pending','Completed','Cancelled'],
        datasets: [{ data: [45, 270, 9], backgroundColor: ['#FFC107','#4CAF50','#F44336'] }]
      },
      options: { responsive: true, legend: { position: 'bottom' } }
    });

    // Doughnut chart - Top Products
    const productsCtx = this.productsChartRef.nativeElement.getContext('2d');
    new Chart(productsCtx, {
      type: 'doughnut',
      data: {
        labels: this.topProducts.map(p => p.name),
        datasets: [{ data: this.topProducts.map(p => p.sold), backgroundColor: ['#3f51b5','#ff5722','#009688','#9c27b0'] }]
      },
      options: { responsive: true, legend: { position: 'bottom' } }
    });
  }
}
