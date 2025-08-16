export type NavbarItem = {
    label: string;
    url: string;   // e.g. "#experience"
    icon: string;  // icon name (lucide-react / fontawesome)
};

export type HomePage = {
    headline: string;
    subheadline: string;
    cta: {
        label: string;
        url: string;
    };
};

export type SocialItem = {
    name: string;   // e.g. "LinkedIn"
    icon: string;   // e.g. "linkedin"
    url: string;    // e.g. "https://linkedin.com/in/divalsehgal"
};

export type ExperienceItem = {
    company: string;
    role: string;
    duration: string;
    details: string[];
};

export type SkillsPage = string[];

export type ProjectItem = {
    name: string;
    description: string;
    url: string;
};

export type BlogItem = {
    title: string;
    url: string;
};

export type Pages = {
    home: HomePage;
    socials: SocialItem[];
    experience: ExperienceItem[];
    skills: SkillsPage;
    projects: ProjectItem[];
    blogs: BlogItem[];
};

export type PortfolioConfig = {
    name: string;
    title: string;
    about: string;
    navbar: NavbarItem[];
    pages: Pages;
};
