import { Hero, Headseo, Blogpost, Layout } from "@components/index";

import s from "@styles/Main.module.scss";

import { supabaseAdmin } from "../utils/supabaseClient";
export default function Home({ posts }) {
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
                {posts?.slice(0, 3)?.map((o) => (
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
