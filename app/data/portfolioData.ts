import { CvCreatorL, CvCreatorM, PokeMemL, PokeMemM, ShChoiceL, ShChoiceM } from "./assets";

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
      "CV Creator is your one-stop solution for crafting a polished curriculum vitae (CV) with ease. Input your details and select from a range of professionally designed templates, and watch as your well-formatted CV takes shape in minutes. CV Creator streamlines the CV creation process, helping you generate a professionally formatted Curriculum effortlessly.",
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
      "CV Creator is your one-stop solution for crafting a polished curriculum vitae (CV) with ease. Input your details and select from a range of professionally designed templates, and watch as your well-formatted CV takes shape in minutes.",
    stack: ["React", "Vite", "JavaScript", "TailwindCSS"],
    mainImg: PokeMemM,
    logoImg: PokeMemL,
    liveLink: "https://effulgent-khapse-4691e8.netlify.app/",
    githubLink: "https://github.com/CristobalNPE/poke-memorize",
  },
  {
    title: "Shopper's Choice",
    shortDescription: "The front of a shopping web",
    description:
      "CV Creator is your one-stop solution for crafting a polished curriculum vitae (CV) with ease. Input your details and select from a range of professionally designed templates, and watch as your well-formatted CV takes shape in minutes. CV Creator streamlines the CV creation process, helping you generate a professionally formatted Curriculum effortlessly.",
    stack: ["React", "Vite", "JavaScript", "TailwindCSS"],
    mainImg: ShChoiceM,
    logoImg: ShChoiceL,
    liveLink: "https://beautiful-paletas-e6ec16.netlify.app/",
    githubLink: "https://github.com/CristobalNPE/shopping-app",
  },
];
