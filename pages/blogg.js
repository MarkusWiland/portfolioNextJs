import { Layout } from "@components/layout";
import Image from "next/image";
import { useState, Fragment } from "react";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import styles from "../styles/Main.module.scss";
import { supabaseAdmin } from "../utils/supabaseClient";
export default function Blogg({ posts }) {
  const [searchInput, setSearchInput] = useState("");
  const [selectedBlogPost, setSelectedBlogPost] = useState(posts[0])
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
    <>
    <Layout>
      <input
        type="text"
        className={styles.searchField}
        placeholder="Sök på blogginlägg..."
        onChange={handleOnChange}
      />
       <div style={{position: "fixed", marginTop: "1rem", width: "3rem"}}>
      <Listbox value={selectedBlogPost} onChange={setSelectedBlogPost}>
        <div style={{position: "relative", marginTop: "1rem"}}>
          <Listbox.Button style={{position: "relative", width: "100%", backgroundColor: "white"}}>
            <span className="block truncate">{selectedBlogPost.title}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {posts.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person.title}
                >
                  {({ selectedBlogPost }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selectedBlogPost ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selectedBlogPost ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
      <section className="section">
        {searchInput.length > 0 ? (
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
