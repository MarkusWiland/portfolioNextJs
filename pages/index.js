import useSWR from "swr";
import { Hero, Headseo, Blogpost } from "@components/index";

import s from "@styles/Main.module.scss";
import { createClient } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY
);
export default function Home({ posts }) {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (post) => {
    await supabaseAdmin
      .from("portfolioPosts")
      .insert([{ title: post.title, sub: post.sub, content: post.content }]);
    toast.success("Du har nu lagt till en post", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 3000,
    });
    reset();
  };

  console.log("posts", posts);
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, error } = useSWR("/api/getData", fetcher);
  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  return (
    <>
      <Headseo title="Markus Wiland" description="" content="" />
      <main className={s.main}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Title</label>
          <input {...register("title", { required: true, maxLength: 20 })} />
          <label>sub</label>
          <input {...register("sub", { pattern: /^[A-Za-z]+$/i })} />
          <label>content</label>
          <textarea {...register("content")} />

          <button type="submit">Skicka</button>
        </form>
        <ToastContainer />
        <Hero />
        <section className="section">
          <article className="container">
            <h1 className="linearGradient">Features blog post</h1>
            <ul className={s.grid}>
              {posts.map((o) => (
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
    </>
  );
}
export async function getStaticProps() {
  const { data, error } = await supabaseAdmin
    .from("portfolioPosts")
    .select("*");

  return {
    props: {
      posts: data,
    },
  };
}
