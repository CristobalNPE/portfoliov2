import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "./ui/scroll-area";

type Props = {
  title: string;
  shortDescription: string;
  description: string;
  stack: string[];
  mainImg: string;
  logoImg: string;
  liveLink: string;
  githubLink: string;
};

function ProjectCard({
  title,
  shortDescription,
  description,
  stack,
  mainImg,
  logoImg,
  liveLink,
  githubLink,
}: Props) {
  return (
    <article className=" w-[20rem] bg-secondary max-h-[40rem] rounded-lg shadow-md hover:shadow-xl  transition-all ">
      <img
        src={mainImg}
        alt={`Screenshot of the project ${title}`}
        className={"rounded-t-lg aspect-video object-cover w-full h-[12rem]"}
      />
      <div className="p-3 flex flex-col  h-[28rem]">
        <div className="grow">
          <div className="flex gap-2 items-center">
            <img
              src={logoImg}
              className="rounded-lg h-[4rem] w-[4rem]"
              alt={`Logo for the project ${title}`}
            />
            <div>
              <p className=" text-foreground/40 text-sm ">{shortDescription}</p>
              <h3 className="uppercase text-primary text-lg">{title}</h3>
            </div>
          </div>
          <ScrollArea className="h-[15rem] mb-3">
            <p className="tracking-wide font-thin leading-6 my-4">
              {description}
            </p>
          </ScrollArea>

          <div className="flex gap-2 flex-wrap">
            {stack.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </div>

        <div className="flex justify-between ">
          <Button
            variant="outline"
            className="flex items-center gap-2 text-lg "
            size={"lg"}
          >
            <IconBrandGithub /> Code
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 text-lg "
            size={"lg"}
          >
            <IconExternalLink /> Live
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
