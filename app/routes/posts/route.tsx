import * as React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { client } from "../../api";

export const meta: MetaFunction = () => {
  return [{ title: "notes" }, { name: "description", content: "notes" }];
};

export async function clientLoader() {
  const data = await client(`posts`);
  return data;
}

export default function Notes() {
  const data = useLoaderData<typeof clientLoader>();

  return (
    <div>
      <h1>notes</h1>
      <ul>
        {data.posts.map((post) => {
          console.log("post", post);
          return (
            <li key={post.id}>
              {/*<Link to={post.slug}>{post.title}</Link>*/}
              {post.name}
              {post.name ? <p>{post.name}</p> : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
