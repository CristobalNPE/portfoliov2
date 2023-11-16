import {
  CvCreatorL,
  CvCreatorM,
  InvManagerL,
  InvManagerM,
  PokeMemL,
  PokeMemM,
  ShChoiceL,
  ShChoiceM,
} from "./assets";

export type PorfolioData = {
  title: string;
  shortDescription: string;
  description: string;
  stack: string[];
  mainImg: string;
  logoImg: string;
  liveLink: string;
  githubLink: string;
};

export const data: PorfolioData[] = [
  {
    title: "Cv Creator",
    shortDescription: "Create your curriculum in minutes",
    description:
      "Application created during my front-end learning journey, allowing users to generate a curriculum in multiple formats based on the information they provide. This project helped me become acquainted with popular React libraries, such as Zustand and React-hook-form.",
    stack: ["React", "Vite", "TypeScript", "TailwindCSS"],
    mainImg: CvCreatorM,
    logoImg: CvCreatorL,
    liveLink: "https://grand-dango-1acc0c.netlify.app/",
    githubLink: "https://github.com/CristobalNPE/CVGenerator-v2",
  },
  {
    title: "PokeMem",
    shortDescription: "A simple card memorize game",
    description:
    "A well-known memory card game that involves avoiding clicking on the same card twice. One of my initial front-end projects using React, primarily centered around API consumption and state management.",
    stack: ["React", "Remix", "TypeScript", "TailwindCSS"],
    mainImg: PokeMemM,
    logoImg: PokeMemL,
    liveLink: "https://poke-mem-v2.vercel.app/",
    githubLink: "https://github.com/CristobalNPE/pokemem-v2",
  },
  {
    title: "Shopper's Choice",
    shortDescription: "The front of a shopping web",
    description:
      "Another of my front-end projects, with a primary focus on consuming an external API and utilizing React context for features like the shopping cart and favorites section. It also extensively employs React Router with loaders.",
    stack: ["React", "Vite", "JavaScript", "TailwindCSS"],
    mainImg: ShChoiceM,
    logoImg: ShChoiceL,
    liveLink: "https://beautiful-paletas-e6ec16.netlify.app/",
    githubLink: "https://github.com/CristobalNPE/shopping-app",
  },
  {
    title: "Inventory Management",
    shortDescription: "Fullstack inventory application",
    description:
      "This application serves as a straightforward solution for inventory management, establishing a connection to a Spring Boot REST API through a React-Remix client. It provides efficient handling of item data and categories, and a clear presentation of pertinent information on the home dashboard.",
    stack: ["Spring Boot", "Remix", "Java", "TypeScript","Mantine","Docker","PostgreSQL"],
    mainImg: InvManagerM,
    logoImg: InvManagerL,
    liveLink: "https://inventory-app-front-eta.vercel.app",
    githubLink: "https://github.com/CristobalNPE/inventory-api",
  },
];
