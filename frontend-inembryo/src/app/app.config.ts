import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // <-- Importa questo
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // <-- Importa questo per Material

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),       // <-- Configura il client HTTP qui
    provideAnimationsAsync()   // <-- Configura le animazioni di Material qui
  ]
};