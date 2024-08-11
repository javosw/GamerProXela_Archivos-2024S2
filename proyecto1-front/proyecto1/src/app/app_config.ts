import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { app_routes } from './app_routes';
import { provideHttpClient } from '@angular/common/http';

export const app_config: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(app_routes),
    provideHttpClient(),
  ]
};
