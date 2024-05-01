import {
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

import "./styles.css";

export function Layout({ children }) {
  return (
    <>
      {/*<LiveReload />*/}
      <Meta />
      <Scripts />
      <ScrollRestoration />
      <nav>
        <NavLink to={""}>home</NavLink>
        <NavLink to={"/posts"}>blog</NavLink>
      </nav>
      {children}
    </>
  );
}

export const meta: MetaFunction = () => {
  return [{ title: "site" }, { name: "description", content: "site" }];
};

export function HydrateFallback() {
  return <p>Loading...</p>;
}

export default function App() {
  return <Outlet />;
}
