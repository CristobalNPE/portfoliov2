import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { NavLink } from "@remix-run/react";
import {
  IconCode,
  IconHome2,
  IconLanguage,
  IconMoonFilled,
  IconStack2,
  IconSunFilled,
} from "@tabler/icons-react";
import { cn } from "~/lib/utils";

export function Navbar() {
  const { setTheme, theme } = useTheme();

  const links = [
    {
      title: "Home",
      icon: <IconHome2 strokeWidth={1.5} />,
      to: ".",
    },
    {
      title: "Portfolio",
      icon: <IconCode strokeWidth={1.5} />,
      to: "portfolio",
    },
    {
      title: "Stack",
      icon: <IconStack2 strokeWidth={1.5} />,
      to: "stack",
    },
  ];

  return (
    <>
      <nav className=" border-2 border-primary/10 z-50 flex bg-gradient-to-tr from-secondary via-muted to-secondary sm:hidden items-center rounded-full h-[3rem] fixed w-full bottom-1 px-[2rem] md:px-[5rem] justify-between shadow-md">
        {links.map((link) => (
          <NavLink
            key={link.title}
            className={({ isActive }) =>
              cn(
                `text-xl flex gap-3 items-center hover:border-b-4 border-primary h-full px-4 transition-all `,
                isActive && "border-primary border-b-4"
              )
            }
            aria-label={`Link to ${link.title}`}
            to={link.to}
          >
            {link.icon}
          </NavLink>
        ))}

        <Button size={"icon"} variant={"link"} aria-label="Switch language">
          <IconLanguage />
        </Button>
        <Button
          aria-label="Toggle Dark Mode"
          onClick={
            theme === "dark" ? () => setTheme("light") : () => setTheme("dark")
          }
          className="hover:animate-spin "
          variant={"link"}
          size={"icon"}
        >
          {theme === "light" ? (
            <IconMoonFilled strokeWidth={1.5} />
          ) : (
            <IconSunFilled strokeWidth={1.5} />
          )}
        </Button>
      </nav>

      <nav className="max-w-6xl z-50 mx-auto hidden bg-gradient-to-tr from-secondary via-muted to-secondary sm:flex items-center rounded-full h-[4rem] sticky top-2 px-[2rem] md:px-[5rem] justify-between shadow-md">
        <div className=" flex h-full">
          {links.map((link) => (
            <NavLink
              key={link.title}
              className={({ isActive }) =>
                cn(
                  `text-xl flex gap-3 items-center hover:border-b-4 border-primary/50 h-full px-4 transition-all`,
                  isActive && "border-primary border-b-4"
                )
              }
              to={link.to}
            >
              {link.icon} {link.title}
            </NavLink>
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            aria-label="Change Language"
            size={"icon"}
            variant={"link"}
            className="hover:animate-pulse"
            onClick={() => alert("Soon™")}
          >
            <IconLanguage />
          </Button>

          <Button
            aria-label="Toggle Dark Mode"
            onClick={
              theme === "dark"
                ? () => setTheme("light")
                : () => setTheme("dark")
            }
            className="hover:animate-spin "
            variant={"link"}
            size={"icon"}
          >
            {theme === "light" ? (
              <IconMoonFilled strokeWidth={1.5} />
            ) : (
              <IconSunFilled strokeWidth={1.5} />
            )}
          </Button>
        </div>
      </nav>
    </>
  );
}
