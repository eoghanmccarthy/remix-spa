import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "home" }, { name: "description", content: "home" }];
};

export default function Index() {
  return (
    <div>
      <h1>home</h1>
      <p>software engineer</p>
    </div>
  );
}
