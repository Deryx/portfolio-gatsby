export type slideMap = {
    company: '',
    technology: [],
    webAddress: '',
    projectName: '',
    projectDescription: '',
    image: ''
};

export interface projectSlide {
    slideInfo: slideMap;
}

export type SlideProps = projectSlide;