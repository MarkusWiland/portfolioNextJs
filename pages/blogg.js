import { Layout } from "@components/layout";
import Image from "next/image";
import { useState, Fragment } from "react";

import styles from "../styles/Main.module.scss";
import { supabaseAdmin } from "../utils/supabaseClient";
export default function Blogg({ posts }) {
  const [searchInput, setSearchInput] = useState("");
  console.log("searchInput", searchInput);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const handleOnChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setSearchInput(value);
    if (searchInput !== "") {
      const filteredPosts = posts.filter((item) => {
        return item.title.toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredPosts(filteredPosts);
    } else {
      setFilteredPosts(posts);
    }
  };
  return (
    <Layout>
      <input
        type="text"
        className={styles.searchField}
        placeholder="Sök på blogginlägg..."
        onChange={handleOnChange}
      />
      <section className="section">
        {searchInput.length >= 1 ? (
          <>
            {filteredPosts?.map((post, i) => (
              <div key={post.id}>
                <h1>{post.title}</h1>
                {/* <Image
                src={`${process.env.NEXT_PUBLIC_SUPABASE_IMAGE}${post.image}`}
                alt={post.image}
                width={1000}
                objectFit="cover"
                objectPosition="center center"
                height={200}
              /> */}
                <p>{post.sub}</p>
              </div>
            ))}
          </>
        ) : (
          <>
            {posts?.map((post, i) => (
              <div key={post.id}>
                <h1>{post.title}</h1>
                {/* <Image
                src={`${process.env.NEXT_PUBLIC_SUPABASE_IMAGE}${post.image}`}
                alt={post.image}
                width={1000}
                objectFit="cover"
                objectPosition="center center"
                height={200}
              /> */}
                <p>{post.sub}</p>
              </div>
            ))}
          </>
        )}
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
