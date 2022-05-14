import { Hero, Headseo } from "@components/index";
import s from "@styles/Main.module.scss";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Headseo title="Markus Wiland" description="" content="" />
      <main className={s.main}>
        <Hero />
        <section className="section">
          <article className="container">
            <h1 className="linearGradient">Features blog post</h1>
            <ul className={s.grid}>
              <li>
                <a>
                  <div className={s.imageSize}>
                    <Image src="/golf.png" layout="fill" alt="text" />
                  </div>
                  <div className={s.blogPostsInfo}>
                    <h4>HELLO</h4>
                    <div>
                      <div>
                        icon <span>text</span>
                      </div>
                      <div>
                        icon <span>text</span>
                      </div>
                    </div>
                    <p>text</p>
                    <p>mer text</p>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div className={s.imageSize}>
                    <Image src="/golf.png" layout="fill" alt="text" />
                  </div>
                  <div>
                    <h4>HELLO</h4>
                    <div></div>
                    <p>text</p>
                    <p>mer text</p>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div className={s.imageSize}>
                    <Image src="/golf.png" layout="fill" alt="text" />
                  </div>
                  <div>
                    <h4>HELLO</h4>
                    <div></div>
                    <p>text</p>
                    <p>mer text</p>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div className={s.imageSize}>
                    <Image src="/golf.png" layout="fill" alt="text" />
                  </div>
                  <div>
                    <h4>HELLO</h4>
                    <div></div>
                    <p>text</p>
                    <p>mer text</p>
                  </div>
                </a>
              </li>
            </ul>
          </article>
        </section>
        <section className="section">
          <article className="container">
            <h1 className="linearGradient">Features Projects</h1>
            <ul className={s.grid}>
              <li>
                <a>
                  <h4>HELLO</h4>
                  <p>text</p>
                  <div>Icons</div>
                  <figure>bild</figure>
                  <p>Se mer</p>
                </a>
              </li>
            </ul>
          </article>
        </section>
      </main>
    </>
  );
}
