import { bootstrapApplication } from '@angular/platform-browser';
import { app_config } from './app/app_config';
import { TopComponent } from './app/top/top.component';

bootstrapApplication(TopComponent, app_config).catch((err) => console.error(err));
