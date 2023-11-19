import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { Badge } from "~/components/ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type Props = {
  title: string;
  shortDescription: string;
  description: string;
  stack: string[];
  mainImg: string;
  logoImg: string;
  liveLink: string;
  githubLink: string;
  hasWarning?: boolean;
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
  hasWarning = false,
}: Props) {
  return (
    <article className="hover:bg-foreground/10 border-2 w-[21rem] bg-secondary max-h-[40rem] rounded-lg shadow-md hover:shadow-xl  transition-all ">
      <img
        src={mainImg}
        alt={`Screenshot of the project ${title}`}
        className={"rounded-t-lg aspect-video object-cover w-full h-[12rem] "}
      />

      <div className="p-3 flex flex-col  h-[28rem]">
        <div className="grow">
          <div className="flex gap-2 items-center">
            <img
              src={logoImg}
              className="rounded-lg h-[4rem] w-[4rem] "
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

          <div className="flex gap-2 flex-wrap justify-center">
            {stack.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </div>

        <div className="flex justify-between ">
          <a
            aria-label="Link to Code in Github"
            href={githubLink}
            rel="noreferrer"
            target="_blank"
            className="flex items-center gap-2 text-lg bg-background py-2 rounded-lg border-2 hover:bg-primary px-8 transition-colors "
          >
            <IconBrandGithub /> Code
          </a>
          {!hasWarning ? (
            <a
              aria-label="Link to Live webpage"
              href={liveLink}
              rel="noreferrer"
              target="_blank"
              className="flex items-center gap-2 text-lg bg-background py-2 rounded-lg border-2 hover:bg-primary px-8 transition-colors "
            >
              <IconExternalLink /> Live
            </a>
          ) : (
            <Dialog>
              <DialogTrigger>
                <button
                  aria-label="Link to Live webpage"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-lg bg-background py-2 rounded-lg border-2 hover:bg-primary px-8 transition-colors "
                >
                  <IconExternalLink /> Live
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Attention!</DialogTitle>
                  <DialogDescription>
                    This project is hosted on a slow server, so it may require a
                    few refreshes to get it working. I apologize for any
                    inconvenience.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <a
                    aria-label="Link to Live webpage"
                    href={liveLink}
                    rel="noreferrer"
                    target="_blank"
                    className="flex justify-center items-center gap-2 text-lg bg-background py-2 rounded-lg border-2 hover:bg-primary px-8 transition-colors "
                  >
                    <IconExternalLink /> Understood!
                  </a>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
