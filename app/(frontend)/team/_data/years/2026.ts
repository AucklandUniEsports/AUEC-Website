import type { TeamYear } from "../types";

// ─────────────────────────────────────────────────────────────
// 2026 committee: edit names, roles and descriptions here.
// Photos live in /public/TeamPage/2026/
// ─────────────────────────────────────────────────────────────

const team2026: TeamYear = {
    execs: [
        {
            name: "Matthew Shing",
            role: "Marketing",
            image: "/TeamPage/2026/execs/shing.webp",
        },
        {
            name: "Leon Huang",
            role: "Vice President",
            image: "/TeamPage/2026/execs/leon.webp",
        },
        {
            name: "Justin Tu",
            role: "President",
            image: "/TeamPage/2026/execs/justin.webp",
        },
        {
            name: "Martin Young",
            role: "Treasurer",
            image: "/TeamPage/2026/execs/martin.webp",
        },
        {
            name: "Tabitha Hughes",
            role: "Secretary",
            image: "/TeamPage/2026/execs/tabitha.webp",
        },
    ],

    departments: [
        {
            name: "Broadcast",
            description:
                "Responsible for producing and delivering live esports broadcasts, including observing gameplay, managing graphics and overlays, and coordinating commentators.",
            image: "/TeamPage/2026/departments/broadcast.webp",
            members: [
                { name: "Caleb Cole-Baker", role: "Broadcast Lead" },
                { name: "Tony", role: "Broadcast" },
                { name: "Sean", role: "Broadcast" },
                { name: "Benrachum Ruritan", role: "Broadcast" },
                { name: "Jonathan", role: "Broadcast" },
                { name: "Jinhoo Jeon", role: "Broadcast" },
                { name: "Ben Reynolds", role: "Broadcast" },
                { name: "Chloe", role: "Broadcast" },
                { name: "Justin", role: "Broadcast" },
                { name: "Twistsy", role: "Broadcast" },
                { name: "Bay", role: "Broadcast" },
            ],
        },
        {
            name: "Events",
            description:
                "Plans and runs our tournaments, locals and social nights, from booking venues to running brackets on the day.",
            image: "/TeamPage/2026/departments/events.webp",
            members: [
                { name: "Jack", role: "Social / Content" },
                { name: "Luobin", role: "Social / Content" },
                { name: "Aysha", role: "Events" },
                { name: "Vanessa", role: "Social / Content" },
                { name: "Elliot", role: "Events" },
            ],
        },
        {
            name: "Social",
            description:
                "Runs our socials and community channels, and makes sure everyone hears about what's coming up.",
            image: "/TeamPage/2026/departments/social.webp",
            members: [
                { name: "Anson Law", role: "Social / Content" },
                { name: "Scott He", role: "Social / Content" },
                { name: "Bryan Binuraj", role: "Social / Content" },
                { name: "Jay Chen", role: "Design" },
                { name: "Jessie", role: "Design" },
                { name: "Brandon", role: "Social Media" },
                { name: "Luo", role: "Social Media" },
                { name: "Shrihan", role: "Editor" },
            ],
        },
        {
            name: "Developers",
            description:
                "Builds and maintains the club's website and tools, including the site you're looking at right now.",
            image: "/TeamPage/2026/departments/developers.webp",
            members: [
                { name: "Lawrence Li", role: "Tech Lead" },
                { name: "Treyson Tsen", role: "Tech Lead" },
                { name: "Ayush Kumar", role: "Design / Dev" },
                { name: "Brody Brownlee", role: "Developer" },
                { name: "Stephen Wu", role: "Developer" },
                { name: "Violet Chen", role: "Developer" },
                { name: "Nick Tran", role: "Developer" },
                { name: "Sean Lester", role: "Developer" },
                { name: "Tony Tran", role: "Developer" },
            ],
        },
    ],
};

export default team2026;
