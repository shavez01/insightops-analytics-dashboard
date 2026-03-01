import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card class="kpi-card">
      <h4>{{title}}</h4>
      <h2>{{value}}</h2>
    </mat-card>
  `,
  styles: [`
    .kpi-card {
      padding: 20px;
      text-align: center;
    }
  `]
})
export class KpiCard {
  @Input() title!: string;
  @Input() value!: string;
}