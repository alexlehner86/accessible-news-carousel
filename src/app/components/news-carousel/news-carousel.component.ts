import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';

import {
    NewsCarouselAnimationDirection,
    NewsCarouselConfig,
    NewsCarouselHeadingLevel,
    NewsCarouselItem,
} from './news-carousel.interface';

/**
 * Standalone component that displays an accessible, animated, responsive carousel with several news slides.
 * You need to provide the `carouselLabel` and the `newsItems` that are rendered as individual slides.
 * The carousel includes two arrow icon buttons that allow the users to switch between slides.
 * Optionally, you can override the `config` for the generic labels and role descriptions used by assistive technologies.
 * The default values are in English (e.g. "carousel" as the role description for the outer container).
 * Set the `slideHeadingLevel` to ensure a correct heading hierarchy on your web page (default: \<h2\>).
 * The following style properties can be customized via CSS variables:
 * - "--news-carousel-height": Set the height of the carousel.
 * - "--news-carousel-max-width": Set the max width of the carousel. The carousel's actual width is responsive to its container.
 * - "--news-carousel-button-background": The background (color) of the previous and next buttons.
 * - "--news-carousel-button-color": The color of the arrow icon in the previous and next buttons.
 * - "--carousel-text-background": The background (color) of the slides' text container.
 * - "--carousel-text-color": The text color of the slides' text container.
 * - "--news-carousel-slide-focus-color": The color of the slides' focus indicator.
 */
@Component({
    standalone: true,
    selector: 'app-news-carousel[carouselLabel][newsItems]',
    imports: [CommonModule, HammerModule],
    templateUrl: './news-carousel.component.html',
    styleUrls: ['./news-carousel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NewsCarouselComponent {
    /**
     * The aria label for the carousel container.
     * It should convey to screenreader users what the carousel is about.
     */
    @HostBinding('attr.aria-label') @Input() public carouselLabel!: string;
    /**
     * The news items to be displayed as slides.
     */
    @Input() public newsItems!: NewsCarouselItem[];
    /**
     * Configuration for the various carousel sections. Default values in English.
     */
    @Input() public config: NewsCarouselConfig = {
        carouselDescription: 'carousel',
        slideDescription: 'slide',
        slideLabel: 'of',
        nextButtonLabel: 'Next slide',
        previousButtonLabel: 'Previous slide',
    }
    /**
     * The heading level to be used for each slide's heading. Default: \<h2\>
     */
    @Input() public slideHeadingLevel = NewsCarouselHeadingLevel.Level2;

    @HostBinding('attr.role') role = 'region';
    @HostBinding('attr.aria-roledescription') get carouselDescription() { return this.config.carouselDescription; }

    public readonly animDirection = NewsCarouselAnimationDirection;
    public readonly headingLevel = NewsCarouselHeadingLevel;

    public currentDirection = NewsCarouselAnimationDirection.None;
    public currentActiveSlide = 0;
    public lastActiveSlide: number | null = null;

    public showPreviousSlide(): void {
        this.currentDirection = NewsCarouselAnimationDirection.FromLeft;
        this.lastActiveSlide = this.currentActiveSlide;
        this.currentActiveSlide = this.currentActiveSlide - 1 < 0 ? this.newsItems.length - 1 : this.currentActiveSlide - 1;
    }
    
    public showNextSlide(): void {
        this.currentDirection = NewsCarouselAnimationDirection.FromRight;
        this.lastActiveSlide = this.currentActiveSlide;
        this.currentActiveSlide = (this.currentActiveSlide + 1) % this.newsItems.length;
    }
}
