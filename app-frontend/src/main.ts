import { bootstrapApplication } from '@angular/platform-browser';
import { app_config } from './app/app_config';
import { GpxComponent } from './app/gpx/gpx.component';

bootstrapApplication(GpxComponent, app_config).catch((err) => console.error(err));
