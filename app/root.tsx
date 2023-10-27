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
} from "@remix-run/react";
import { ThemeProvider } from "~/components/theme-provider";
import { Navbar } from "~/components/Navbar";

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
