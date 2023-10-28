import type { MetaFunction } from "@remix-run/node";
import type { TablerIconsProps } from "@tabler/icons-react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconExternalLink,
  IconMail,
} from "@tabler/icons-react";
import { Heading } from "~/components/typography/Heading";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio - Cristóbal Pulgar Estay" },
    { name: "description", content: "Welcome to my Web Portfolio!" },
  ];
};

type ContactLinks = {
  name: string;
  icon: (props: TablerIconsProps) => JSX.Element;
  to?: string;
};

export default function Index() {
  const links: ContactLinks[] = [
    {
      name: "Whatsapp",
      icon: IconBrandWhatsapp,
      to: "https://api.whatsapp.com/send?phone=56936724002",
    },
    {
      name: "LinkedIn",
      icon: IconBrandLinkedin,
      to: "https://www.linkedin.com/in/cristobalnpe/",
    },
    {
      name: "GitHub",
      icon: IconBrandGithub,
      to: "https://github.com/CristobalNPE",
    },
    {
      name: "Email",
      icon: IconMail,
      to: "mailto:cristobal.npe@gmail.com?subject=Contact%20from%20website",
    },
  ];

  return (
    <main
      className={`animate-in fade-in duration-700  p-5 grid place-items-center h-[calc(100dvh-4rem)] text-center`}
    >
      <div>
        <p className="mb-4 font-thin tracking-wider lg:text-2xl">
          Welcome to my website, I'm
        </p>
        <Heading variant={"h0"}>Cristóbal Pulgar Estay</Heading>
        <Heading className="text-primary" variant={"h0"}>
          Full Stack Web Developer
        </Heading>
        <div className={"mt-12 flex justify-center gap-3 sm:gap-5"}>
          {links.map((link) => (
            <TooltipProvider key={link.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    aria-label={`Link to ${link.name}`}
                    rel="noreferrer"
                    target="_blank"
                    href={link.to}
                    className={
                      "border-2 shadow-md bg-secondary text-secondary-foreground hover:bg-secondary/80 flex justify-center items-center rounded-full h-14 w-14 sm:h-16 sm:w-16 hover:scale-110 transition-all"
                    }
                  >
                    {<link.icon size={36} stroke={1.5} />}
                  </a>
                </TooltipTrigger>
                <TooltipContent className="flex items-center gap-1">
                  <p>{link.name}</p>
                  <IconExternalLink stroke={1} size={16} />
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </main>
  );
}
