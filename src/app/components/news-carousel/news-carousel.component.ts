import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

import { NewsCarouselConfig, NewsCarouselItem } from './news-carousel.interface';

/**
 * TODO: describe component
 * Set height via CSS variable "--news-carousel-height" and width via "--news-carousel-width".
 */
@Component({
    standalone: true,
    selector: 'app-news-carousel[carouselLabel][newsItems]',
    imports: [CommonModule],
    templateUrl: './news-carousel.component.html',
    styleUrls: ['./news-carousel.component.scss']
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
     * The role description for each slide container. Default: "slide"
     */
    @Input() public config: NewsCarouselConfig = {
        carouselDescription: 'carousel',
        slideDescription: 'slide',
        slideLabel: 'of',
        nextButtonLabel: 'Next slide',
        previousButtonLabel: 'Previous slide',
    }

    /**
     * The role description of the carousel container. Default: "carousel"
     */
    @HostBinding('attr.aria-roledescription')
    get carouselDescription() { return this.config.carouselDescription; }

    @HostBinding('attr.role') role = 'region';

    public activeSlide = 0;

    public showPreviousSlide(): void {
        this.activeSlide = this.activeSlide - 1 < 0 ? this.newsItems.length - 1 : this.activeSlide - 1;
    }

    public showNextSlide(): void {
        this.activeSlide = (this.activeSlide + 1) % this.newsItems.length;
    }
}
