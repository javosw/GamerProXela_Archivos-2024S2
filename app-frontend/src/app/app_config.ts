import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { app_routes } from './app_routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './http/auth.interceptor';

export const app_config: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(app_routes),
    provideHttpClient(withInterceptors([authInterceptor])),//provideHttpClient(),
  ]
};
