# Accessible News Carousel

Angular standalone component that displays an accessible, animated, responsive carousel with several news slides. Check out the [live version](https://alexlehner86.github.io/accessible-news-carousel/).

The demo includes a news carousel with customized styling as well as a version with the default settings and styling.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Features

- Standalone component for direct use in your Angular 15 application.
- Accessible implementation (semantic markup, keyboard operability) following the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/).
- Responsive design using [CSS Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries). Warning: Container Queries are [not supported in all browsers yet](https://caniuse.com/css-container-queries)!
- Horizontal slide in/out animation.
- Swipe gesture support.
- Customizable design using CSS Variables.

## Usage Notes
Set a label for assistive technologies via the input property `carouselLabel`. Then provide the slides via the input property `newsItems`. The data items have to conform to the `NewsCarouselItem` interface.

### Gesture Configuration
For horizontal swiping to work, you need to install the [Hammer.js library](https://www.npmjs.com/package/hammerjs) and provide Angular's `HammerModule` ([see docs](https://angular.io/api/platform-browser/HammerModule)) as well as a `HammerGestureConfig` ([see docs](https://angular.io/api/platform-browser/HammerGestureConfig)).

To prevent a conflict with the standard scroll behaviour of browsers, you should limit the handled gestures to horizontal swipes via the following override: `'swipe': { direction: Hammer.DIRECTION_HORIZONTAL }`. Either create your own config or use the `NewsCarouselHammerConfig` from this repo.

### Optional Input Properties
Optionally, you can override the input property `config` for the generic labels and role descriptions used by assistive technologies. The default values are in English (e.g. "carousel" as the role description for the outer container).

Set the input property `slideHeadingLevel` to ensure a correct heading hierarchy on your web page (default: &lt;h2&gt;). For example: If you include the carousel after a heading with level 2, the you should set the level for the slide headings to `NewsCarouselHeadingLevel.Level3`.

### Customization Options

The following style properties can be customized via CSS variables:
- `--news-carousel-height`: Set the height of the carousel.
- `--news-carousel-max-width`: Set the max width of the carousel. The carousel's actual width is responsive to its container.
- `--news-carousel-button-background`: The background (color) of the previous and next buttons.
- `--news-carousel-button-color`: The color of the arrow icon in the previous and next buttons.
- `--carousel-text-background`: The background (color) of the slides' text container.
- `--carousel-text-color`: The text color of the slides' text container.
- `--news-carousel-slide-focus-color`: The color of the slides' focus indicator.

Furthermore, you can override any HTML elements inside the carousel, e.g. the slides' headings. Simply apply the styling to the component container: `app-news-carousel h2 { font-size: 2rem; }`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Resources
- https://www.w3.org/WAI/ARIA/apg/patterns/carousel/
- https://dev.to/jasonwebb/how-to-build-a-more-accessible-carousel-or-slider-35lp