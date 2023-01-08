import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

import {
    NewsCarouselAnimationDirection,
    NewsCarouselConfig,
    NewsCarouselHeadingLevel,
    NewsCarouselItem,
} from './news-carousel.interface';

/**
 * TODO: describe component
 * Set height via CSS variable "--news-carousel-max-height" and width via "--news-carousel-max-width".
 * Style text containers with: --carousel-text-background and --carousel-text-color
 */
@Component({
    standalone: true,
    selector: 'app-news-carousel[carouselLabel][newsItems]',
    imports: [CommonModule],
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
