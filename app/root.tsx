import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css";
import fontStylesheetCss from "~/styles/font.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "@remix-run/react";
import { IconHomeShield, IconMoodSadDizzy } from "@tabler/icons-react";
import { Navbar } from "~/components/Navbar";
import { ThemeProvider } from "~/components/theme-provider";
import { Button } from "./components/ui/button";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: fontStylesheetCss },
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
        <ThemeProvider
          defaultTheme="dark"
          attribute={"class"}
          disableTransitionOnChange
          enableSystem
        >
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
  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    return (
      <html>
        <head>
          <title>{error.status} - Oh no!</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <ThemeProvider defaultTheme="dark" attribute={"class"} enableSystem>
            <div className="text-center grid place-content-center h-[100dvh] p-3">
              <h1 className="font-thin text-5xl sm:text-7xl">
                Error{" "}
                <span className="font-black text-destructive">
                  {error.status}
                </span>
              </h1>
              <p className="font-mono text-xl sm:text-2xl">{error.data}</p>

              <IconMoodSadDizzy
                className="text-center mt-12 mx-auto"
                strokeWidth={1}
                size={200}
              />
              <Button
                aria-label="Go to Home page"
                className="mt-12"
                size={"lg"}
                onClick={() => navigate("/")}
              >
                <IconHomeShield className="mr-2 h-4 w-4" /> Go back to safety
              </Button>
            </div>
            <Scripts />
          </ThemeProvider>
        </body>
      </html>
    );
  }
}
