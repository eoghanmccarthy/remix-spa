import * as React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { client } from "../../api";

export const meta: MetaFunction = () => {
  return [{ title: "blog" }, { name: "description", content: "blog" }];
};

export async function clientLoader() {
  const data = await client(`posts`);
  return data;
}

export default function Notes() {
  const data = useLoaderData<typeof clientLoader>();

  return (
    <div>
      <h1>blog</h1>
      <ul>
        {data.posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`${post.id}`} prefetch={"intent"}>{post.title}</Link>
              {post.content ? <p>{post.content}</p> : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
