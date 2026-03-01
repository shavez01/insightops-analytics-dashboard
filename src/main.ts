import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { App } from './app/app';

import { Chart, registerables } from 'chart.js';

// ✅ IMPORTANT
Chart.register(...registerables);

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});