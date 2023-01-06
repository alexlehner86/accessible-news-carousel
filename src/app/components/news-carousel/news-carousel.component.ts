import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

import { NewsCarouselItem } from './news-carousel.interface';

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
    @HostBinding('attr.aria-label') @Input() carouselLabel!: string;
    /**
     * The role description of the carousel container. Default: "carousel"
     */
    @HostBinding('attr.aria-roledescription') @Input() carouselDescription = 'carousel';
    /**
     * The role description for each slide container. Default: "slide"
     */
    @Input() slideDescription = 'slide';
    /**
     * The middle word for every slide's aria-label, e.g. "1 of 3". Default: "of"
     */
    @Input() slideLabel = 'of';
    /**
     * The news items to be displayed as slides.
     */
    @Input() newsItems!: NewsCarouselItem[];

    @HostBinding('attr.role') role = 'region';
}
