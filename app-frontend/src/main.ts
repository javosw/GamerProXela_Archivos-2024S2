import { bootstrapApplication } from '@angular/platform-browser';
import { gpxConfig } from './app/gpx.config';
import { GpxComponent } from './app/gpx/gpx.component';

bootstrapApplication(GpxComponent, gpxConfig).catch((err) => console.error(err));
