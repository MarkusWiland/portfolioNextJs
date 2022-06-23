import { Layout } from "@components/layout";
import Image from "next/image";
import { supabaseAdmin } from "../utils/supabaseClient";
export default function blog({ posts }) {
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Layout>
      <input
        type="text"
        placeholder="Sök på blogginlägg..."
        onChange={handleOnChange}
      />
      <section className="section">
        {posts?.map((post, i) => {
          <div>
            <h1>{post.title}</h1>
            <Image
              src={post.image}
              alt={post.image}
              width={1000}
              height={200}
            />
            <p>{post.sub}</p>
            <p>{post.content}</p>
          </div>;
        })}
      </section>
    </Layout>
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
