import {
  Hero,
  Headseo,
  Blogpost,
  Form,
  Header,
  Layout,
} from "@components/index";
import { useEffect, useState } from "react";
import s from "@styles/Main.module.scss";
import { createClient } from "@supabase/supabase-js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "@components/auth/Auth";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY
);
import { supabase } from "../utils/supabaseClient";
export default function Home({ posts, session }) {
  return (
    <>
      <Layout>
        <Headseo title="Markus Wiland" description="" content="" />
        <main className={s.main}>
          <Hero />
          <section className="section">
            <article className="container">
              <h1 className="linearGradient">Features blog post</h1>
              <ul className={s.grid}>
                {posts.slice(0, 3)?.map((o) => (
                  <Blogpost
                    key={o.id}
                    image={o.image}
                    id={o.id}
                    content={o.content}
                    title={o.title}
                  />
                ))}
              </ul>
            </article>
          </section>
          <ToastContainer />
        </main>
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  const { data, error } = await supabaseAdmin
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });
  console.log("data", data);
  return {
    props: {
      posts: data,
      revalidate: 10,
    },
  };
}
