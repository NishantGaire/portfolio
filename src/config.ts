import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Nishant Gaire",
  logo: "/logo.webp",
  email: "gairenishan@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Projects", url: "/projects" },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/NishantGaire",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:gairenishan@gmail.com",
    icon: "mdi:email",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/nishant-gaire-6bb625240/",
    icon: "mdi:linkedin",
    external: true,
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Nishant Gaire",
    description:
      "Graduate Computer Science student with hands-on experience in backend engineering and generative AI.",
    image: identity.logo,
  },
  role: "Graduate Student & Backend/AI Developer",
  description:
    "Graduate Computer Science student with hands-on experience in backend engineering and generative AI.",
  socialLinks: socialLinks,
  links: [
    { title: "My Projects", url: "/projects" },
    { title: "About Me", url: "/about" },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Nishant Gaire",
    description:
      "Graduate Computer Science student with hands-on experience in backend engineering and generative AI. Skilled in prompt engineering, retrieval-augmented generation (RAG), and fine-tuning LLMs. Built NLP pipelines using embeddings and vector databases for high-speed retrieval, and designed scalable APIs and relational schemas integrating AI features into products.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description:
      "Graduate Computer Science student with hands-on experience in backend engineering and generative AI. Skilled in prompt engineering, retrieval-augmented generation (RAG), and fine-tuning LLMs. Built NLP pipelines using embeddings and vector databases for high-speed retrieval, and designed scalable APIs and relational schemas integrating AI features into products.",
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`,
    items: [
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.webp",
          url: "https://github.com/NishantGaire",
        },
        date: "2021 - Present",
      },
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.webp",
          url: "https://github.com/NishantGaire",
        },
        date: "2019 - 2021",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`,
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Nishant Gaire",
    description: "Selected work in backend, AI/ML, and RAG.",
    image: identity.logo,
  },
  subtitle: "Selected projects.",
  projects: [
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/NishantGaire",
    },
    {
      title: "Project 2",
      description: "Project 2 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/NishantGaire",
    },
    {
      title: "Project 3",
      description: "Project 3 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/NishantGaire",
    },
  ],
};
