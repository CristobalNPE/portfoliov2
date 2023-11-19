import type { MetaFunction } from "@remix-run/node";
import ProjectCard from "~/components/ProjectCard";
import { Heading } from "~/components/typography/Heading";
import { data } from "~/data/portfolioData";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio - Projects" },
    {
      name: "description",
      content: "Take a look at some of the projects I've done while learning!",
    },
  ];
};

export default function Portfolio() {
  return (
    <main className="animate-in fade-in duration-700 py-5 px-5 md:px-0  mb-[4rem] sm:mb-0">
      <Heading className="pt-7 pb-16 font-semibold text-center">
        Some of my projects
      </Heading>

      <div className="flex flex-wrap justify-center gap-10">
        {data.map((d) => (
          <ProjectCard key={d.title} {...d} />
        ))}
      </div>
    </main>
  );
}
