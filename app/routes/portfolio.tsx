import ProjectCard from "~/components/ProjectCard";
import { Heading } from "~/components/typography/Heading";
import { data } from "~/data/portfolioData";

export default function Portfolio() {
  return (
    <main className="py-5 px-5 md:px-0  mb-[4rem] sm:mb-0">
      <Heading className="py-7 font-semibold text-center">
        Some of my projects
      </Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 justify-items-center ">
        {data.map((d) => (
          <ProjectCard key={d.title} {...d} />
        ))}
      </div>
    </main>
  );
}
