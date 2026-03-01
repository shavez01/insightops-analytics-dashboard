import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {

  getKpis() {
    return [
      { title: 'Total Revenue', value: '$124,580' },
      { title: 'Growth Rate', value: '18%' },
      { title: 'Active Users', value: '3,240' },
      { title: 'Conversion Rate', value: '6.4%' }
    ];
  }

  getRevenueData() {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          data: [10000, 18000, 15000, 22000, 26000],
          label: 'Revenue',
          fill: true
        }
      ]
    };
  }
}