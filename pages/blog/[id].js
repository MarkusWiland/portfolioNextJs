import React from "react";

import { supabaseAdmin } from "../../utils/supabaseClient";
const post = ({ data }) => {
  const { id, created_at, title, sub, content, image, user_id, email } =
    data[0];

  return (
    <>
      <div>{id}</div>
      <div>
        {new Date(created_at).toLocaleDateString("se-SV", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div>{title}</div>
      <div>{sub}</div>
      <div>{content}</div>
      <div>{user_id}</div>
      <div>{email}</div>
    </>
  );
};

export default post;
export async function getStaticProps({ params }) {
  const { data, error } = await supabaseAdmin
    .from("posts")
    .select("*")
    .eq("id", `${params.id}`);

  return {
    props: { data },
  };
}
export async function getStaticPaths() {
  const { data, error } = await supabaseAdmin
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });
  const paths = data.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });

  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
