import type { MetaFunction } from "@remix-run/node";
import StackCard from "~/components/StackCard";
import { Heading } from "~/components/typography/Heading";
import { data } from "~/data/stackData";
export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio - Stack" },
    {
      name: "description",
      content: "Check out some of the technologies I'm familiar with!",
    },
  ];
};

export default function Stack() {
  return (
    <main className="animate-in fade-in duration-700 py-5 px-5 md:px-2  mb-[4rem] sm:mb-0">
      <Heading className="pt-7 pb-16 text-center font-semibold">
        Some technologies I have worked with
      </Heading>
      <div className="flex gap-6 sm:gap-12 flex-wrap justify-center">
        {data.map((d, index) => (
          <StackCard index={index} key={d.name} icon={d.icon} name={d.name} />
        ))}
      </div>
    </main>
  );
}
