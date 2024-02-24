type technologyList = string[];

export interface imageSlide {
    company?: never;
    technology?: never;
    webAddress?: never;
    projectName?: never;
    projectDescription?: never;
    image: string;
}

export interface projectSlide {
    company?: string;
    technology?: technologyList;
    webAddress?: string;
    projectName?: string;
    projectDescription?: string;
    image?: never;
}

export type SlideProps = projectSlide | imageSlide;