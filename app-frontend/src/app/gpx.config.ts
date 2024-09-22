import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { gpxRoutes } from './gpx.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './gpx-interceptors/auth.interceptor';

export const gpxConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(gpxRoutes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};
