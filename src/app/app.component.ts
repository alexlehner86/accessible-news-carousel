import { Component } from '@angular/core';

import { NewsCarouselComponent } from './components/news-carousel/news-carousel.component';
import { NewsCarouselItem } from './components/news-carousel/news-carousel.interface';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [NewsCarouselComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class CarouselDemoAppComponent {
    public newsItems: NewsCarouselItem[] = [
        {
            heading: 'A Conversation with ChatGPT about Web Accessibility and Widespread Myths',
            textSnippet: 'The artificial intelligence impresses with thoughtful and well composed answers. But it\'s not perfect.',
            imageUrl: 'https://www.oidaisdes.org/social_sharing_robot_and_human.jpg',
            link: 'https://www.oidaisdes.org/chatgpt-accessibility-myths.en',
        },
        {
            heading: '3 Ways how Web Developers also benefit from Accessibility',
            textSnippet: 'Semantic HTML is easy to read and maintain, keyboard operable by default, and works well with CSS.',
            imageUrl: 'https://www.oidaisdes.org/social_sharing_web_dev_workplace.jpg',
            link: 'https://www.oidaisdes.org/3-ways-web-devs-benefit-accessibility.en',
        },
        {
            heading: 'CSS tweaks for better visibility in Forced Colors Mode',
            textSnippet: 'Find out how forced colors mode works for websites and how to improve the user experience.',
            imageUrl: 'https://www.oidaisdes.org/social_sharing_color_palette.jpg',
            link: 'https://www.oidaisdes.org/forced-colors-mode.en',
        }
    ]
}
