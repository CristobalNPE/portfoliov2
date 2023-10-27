import type { StackData } from "~/data/stackData";

function StackCard({ name, icon }: StackData) {
  const IconComponent = icon;

  return (
    <article className="opacity-80 bg-secondary p-2 sm:p-4 lg:p-5  rounded-lg flex flex-col justify-center items-center gap-3 shadow-md border-2 hover:scale-105 transition-all hover:opacity-100">
      <IconComponent />
      <h1 className="text-xl">{name}</h1>
    </article>
  );
}

export default StackCard;
