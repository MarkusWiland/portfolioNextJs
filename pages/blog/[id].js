import { Layout } from "@components/index";
import Image from "next/image";
import React from "react";

import { supabaseAdmin } from "../../utils/supabaseClient";
const post = ({ data }) => {
  const { id, created_at, title, sub, content, image, user_id, email } =
    data[0];

  return (
    <Layout>
      <section className="section">
        <Image
          src={`${process.env.NEXT_PUBLIC_SUPABASE_IMAGE}${image}`}
          width={1100}
          height={400}
          objectFit="cover"
          objectPosition="center"
          alt="text"
        />
        <h1>{title}</h1>
        <p>
          {new Date(created_at).toLocaleDateString("sv-SE", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <p>{sub}</p>
        <p>{content}</p>
        <p>{user_id}</p>
        <p>{email}</p>
      </section>
    </Layout>
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
