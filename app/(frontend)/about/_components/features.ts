export type Feature = {
    title: string;
    text: string;
    button?: { title: string; link: string };
    video: { src: string; start: number; end: number };
};

export const features: Feature[] = [
    {
        title: "For the Players.",
        text: "Our team at AUEC is focused on providing a platform where everyone can enjoy gaming to their heart's content. We are dedicated to providing quality events and opportunities for talent to compete in.",
        video: {
            src: "/auec-promotional-reel-about-page.mp4",
            start: 0,
            end: 10,
        },
    },
    {
        title: "Behind the Scenes.",
        text: "Behind the scenes, our team puts a lot of effort into broadcast, creative design, and social media. As a club, we want to create an environment where our staff can have fun and develop their skills.",
        button: { title: "Meet The Team", link: "/team" },
        video: {
            src: "/auec-promotional-reel-about-page.mp4",
            start: 10,
            end: 20,
        },
    },
    {
        title: "The Community.",
        text: "Whether you want to grind matches or get involved behind the scenes, AUEC has a place for you. Join us and become part of Auckland's biggest university gaming community.",
        button: { title: "View Events", link: "/events" },
        video: {
            src: "/auec-promotional-reel-about-page.mp4",
            start: 20,
            end: 30,
        },
    },
];
