import { HammerGestureConfig } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

/**
 * HammerJS configuration for the News Carousel that only allows horizontal swipe gestures.
 */
export class NewsCarouselHammerConfig extends HammerGestureConfig {
    override overrides = {
        // override hammerjs default configuration
        'swipe': { direction: Hammer.DIRECTION_HORIZONTAL },
        'pinch': { enable: false },
        'rotate': { enable: false },
        'pan': { enable: false }
    };
}
