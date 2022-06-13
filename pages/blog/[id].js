import React from "react";

const post = ({ data }) => {
  console.log(data);
  return <div>{data.body}</div>;
};

export default post;
export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await response.json();

  return {
    props: { data },
  };
}
export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
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
