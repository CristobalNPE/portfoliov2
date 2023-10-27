import {
  CSS3,
  HTML5,
  Java,
  JavaScript,
  Mantine,
  TypeScript,
  React,
  Express,
  GitHub,
  IntelliJ,
  MongoDb,
  Spring,
  TailwindCss,
  Vite,
  VsCode,
  PostgreSql,
  Remix,
} from "./devicons";

type Props = {
  size?: number;
};

export type StackData = {
  name: string;
  icon: ({ size }: Props) => JSX.Element;
};

export const data: StackData[] = [
  {
    name: "HTML5",
    icon: HTML5,
  },
  {
    name: "CSS3",
    icon: CSS3,
  },
  {
    name: "JavaScript",
    icon: JavaScript,
  },
  {
    name: "TypeScript",
    icon: TypeScript,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "Mantine",
    icon: Mantine,
  },
  {
    name: "React",
    icon: React,
  },

  {
    name: "MongoDB",
    icon: MongoDb,
  },

  {
    name: "TailwindCSS",
    icon: TailwindCss,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSql,
  },
  {
    name: "Spring",
    icon: Spring,
  },
  {
    name: "Express",
    icon: Express,
  },
  {
    name: "IntelliJ",
    icon: IntelliJ,
  },
  {
    name: "VSCode",
    icon: VsCode,
  },
  {
    name: "GitHub",
    icon: GitHub,
  },
  {
    name: "Vite",
    icon: Vite,
  },
  {
    name: "Remix",
    icon: Remix,
  },
];
