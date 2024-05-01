import * as React from "react";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { client } from "../../api";

export const meta: MetaFunction = () => {
  return [{ title: "post" }, { name: "description", content: "post" }];
};

export async function clientLoader({ params }) {
  const data = await client(`posts/${params.id}`);
  return data;
}

export default function Notes() {
  const data = useLoaderData<typeof clientLoader>();
  const { post } = data;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
