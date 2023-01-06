import { Component, HostBinding, Input } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-news-carousel[carouselLabel]',
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
    @HostBinding('attr.aria-roledescription') @Input() ariaRoleDescription = 'carousel';

    @HostBinding('attr.role') role = 'region';
}
