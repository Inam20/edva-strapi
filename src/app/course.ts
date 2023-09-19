export interface Course {
    id: number;
    title: string;
    slug: string;
    shortDesc: string;
    numberOfLesson: string;
    numberOfStudent: string;
    courses_category: {
        title: string;
        slug: string;
        image: {
            url: string;
        };
    }
    price: number;
    description: string;
    videoSubtitle: string;
    language: string;
    accessLimit: string;
    certificate: boolean;
    totalCourseDuration: string;
    popular: boolean;
    image: {
        url: string;
    };
    course_videos: {
        title: string;
        slug: string;
        duration: string;
        video: {
            url: string;
        }
    };
    quantity: number;
}