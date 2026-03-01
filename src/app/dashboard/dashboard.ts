import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import type { ChartConfiguration } from 'chart.js';
import { AnalyticsService } from '../core/services/analytics.service';
import { KpiCard } from '../shared/kpi-card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, BaseChartDirective, KpiCard],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard {

  kpis: any[] = [];

  revenueData!: ChartConfiguration<'line'>['data'];
  revenueOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false
  };

  constructor(private analytics: AnalyticsService) {
    this.kpis = this.analytics.getKpis();
    this.revenueData = this.analytics.getRevenueData();
  }
}