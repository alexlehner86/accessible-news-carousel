import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';

import { CarouselDemoAppComponent } from './app/app.component';
import { NewsCarouselHammerConfig } from './app/config/gestures.config';

bootstrapApplication(CarouselDemoAppComponent, {
    providers: [
        importProvidersFrom(HammerModule),
        { provide: HAMMER_GESTURE_CONFIG, useClass: NewsCarouselHammerConfig, deps: [] },
    ]
})
    .catch(err => console.error(err));
