import 'hammerjs';

import { Component } from '@angular/core';

import { NewsCarouselComponent } from './components/news-carousel/news-carousel.component';
import { NewsCarouselHeadingLevel, NewsCarouselItem } from './components/news-carousel/news-carousel.interface';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [NewsCarouselComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class CarouselDemoAppComponent {
    public readonly headingLevel = NewsCarouselHeadingLevel;

    public newsItems: NewsCarouselItem[] = [
        {
            heading: '3 Ways how Web Developers also benefit from Accessibility',
            textSnippet: 'Semantic HTML is easy to read and maintain, keyboard operable by default, and works well with CSS.',
            imageUrl: 'assets/social_sharing_web_dev_workplace.jpg',
            link: 'https://www.oidaisdes.org/3-ways-web-devs-benefit-accessibility.en',
        },
        {
            heading: 'A Conversation with ChatGPT about Web Accessibility and Widespread Myths',
            textSnippet: 'The artificial intelligence impresses with thoughtful and well composed answers. But it\'s not perfect.',
            imageUrl: 'assets/social_sharing_robot_and_human.jpg',
            link: 'https://www.oidaisdes.org/chatgpt-accessibility-myths.en',
        },
        {
            heading: 'Common ARIA mistakes and how to avoid them',
            textSnippet: 'ARIA roles and attributes can make your website more accessible, if you know what you\'re doing.',
            imageUrl: 'assets/social_sharing_confused_couple.jpg',
            link: 'https://www.oidaisdes.org/common-aria-mistakes.en',
        },
        {
            heading: 'CSS tweaks for better visibility in Forced Colors Mode',
            textSnippet: 'Find out how forced colors mode works for websites and how to improve the user experience.',
            imageUrl: 'assets/social_sharing_color_palette.jpg',
            link: 'https://www.oidaisdes.org/forced-colors-mode.en',
        }
    ];
}
