import { Component } from '@angular/core';

import { NewsCarouselComponent } from './components/news-carousel/news-carousel.component';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [NewsCarouselComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class CarouselDemoAppComponent {
    title = 'accessible-news-carousel';
}
