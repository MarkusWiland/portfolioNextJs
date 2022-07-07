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
          <section className="section" id="intro">
            <artice className="container">
              <div className={s.way}>
                <div>
                  <h3>Infomration</h3>
                  <p>
                    lorem asdasdas asdad qwe qwr fbwo 9pfhaosfih asiloiweg
                    weugiyhw iouegdjfhsdfoiua gf
                  </p>
                </div>
                <div>
                  <p>ttext</p>
                </div>
              </div>
            </artice>
          </section>
          <section className="section">
            <article className="container">
              <h1 className="linearGradient">Senaste blogginlägg</h1>
              <ul className={s.grid}>
                {posts?.slice(0, 3)?.map((o) => (
                  <Blogpost
                    key={o.id}
                    createdAt={o.created_at}
                    image={o.image}
                    id={o.id}
                    sub={o.sub}
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
  return {
    props: {
      posts: data,
      revalidate: 10,
    },
  };
}
