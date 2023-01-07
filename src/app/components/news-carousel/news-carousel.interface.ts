export interface NewsCarouselConfig {
    /**
     * The role description of the carousel container. English default: "carousel"
     */
    carouselDescription: string;
    /**
     * The role description for each slide container. English default: "slide"
     */
    slideDescription: string;
    /**
     * The middle word for every slide's aria-label, e.g. "1 of 3". English default: "of"
     */
    slideLabel: string;
    nextButtonLabel: string;
    previousButtonLabel: string;
}

export interface NewsCarouselItem {
    heading: string;
    textSnippet: string;
    imageUrl: string;
    link: string;
}

export enum NewsCarouselHeadingLevel {
    Level2,
    Level3,
    Level4,
}

export enum NewsCarouselAnimationDirection {
    FromLeft = 'FromLeft',
    FromRight = 'FromRight',
    None = 'None',
}
