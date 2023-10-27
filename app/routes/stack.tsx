import StackCard from "~/components/StackCard";
import { Heading } from "~/components/typography/Heading";
import { data } from "~/data/stackData";
export default function Stack() {
  return (
    <main className="py-5 px-5 md:px-2  mb-[4rem] sm:mb-0">
      <Heading className="py-7 text-center font-semibold">
        Some of technologies I have worked with
      </Heading>
      <div className="flex gap-4 flex-wrap justify-center">
        {data.map((d) => (
          <StackCard key={d.name} icon={d.icon} name={d.name} />
        ))}
      </div>
    </main>
  );
}
