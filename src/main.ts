import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';

import { CarouselDemoAppComponent } from './app/app.component';

bootstrapApplication(CarouselDemoAppComponent, {
    providers: [
        importProvidersFrom(HammerModule),
        { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig, deps: [] },
    ]
})
    .catch(err => console.error(err));
