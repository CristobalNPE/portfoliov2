import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import { ThemeProvider } from "~/components/theme-provider";
import { Navbar } from "~/components/Navbar";
import { Heading } from "./components/typography/Heading";
import { IconMoodSadDizzy } from "@tabler/icons-react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider defaultTheme="dark" attribute={"class"} enableSystem>
          <div className="max-w-screen-2xl mx-auto min-h-[100dvh]">
            <Navbar />
            <Outlet />
          </div>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </ThemeProvider>
      </body>
    </html>
  );
}
export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <html>
        <head>
          <title>{error.status} - Oh no!</title>
          <Meta />
          <Links />
        </head>
        <body>
          <ThemeProvider defaultTheme="dark" attribute={"class"} enableSystem>
            <div className="text-center grid place-content-center h-[100dvh]">
              <Heading variant="h0" className="font-thin">
                Error{" "}
                <span className="font-black text-destructive">
                  {error.status}
                </span>
              </Heading>
              <p className="font-mono">{error.data}</p>

              <IconMoodSadDizzy
                className="text-center mt-12 mx-auto"
                size={200}
              />
            </div>
            <Scripts />
          </ThemeProvider>
        </body>
      </html>
    );
  }
}
