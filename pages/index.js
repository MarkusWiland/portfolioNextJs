
import useSWR from 'swr'
import { Hero, Headseo, Blogpost } from "@components/index";

import s from "@styles/Main.module.scss";

export default function Home() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('/api/getData', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>



  return (
    <>
      <Headseo title="Markus Wiland" description="" content="" />
      <main className={s.main}>
        <Hero />
        <section className="section">
          <article className="container">
            <h1 className="linearGradient">Features blog post</h1>
            <ul className={s.grid}>
              {data.map((o) => (
                <Blogpost image={o.image} id={o.id} content={o.content} title={o.title}/>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </>
  );
}
