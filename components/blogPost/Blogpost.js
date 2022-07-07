import React from "react";
import Image from "next/image";
import Link from "next/link";
import st from "@styles/Main.module.scss";
import s from "./BlogPost.module.scss";
export const Blogpost = ({ title, image, id, content, sub, createdAt }) => {
  return (
    <>
      <Link href={`/blog/${id}`}>
        <li>
          <a>
            <div className={st.imageSize}>
              <Image
                src={`${process.env.NEXT_PUBLIC_SUPABASE_IMAGE}${image}`}
                layout="fill"
                objectFit="cover"
                priority
                alt="text"
              />
            </div>
            <div className={s.blogPostsInfo}>
              <h3>{title}</h3>

              <div>
                <p className={s.blogPostDate}>
                  Markus Wiland -{" "}
                  <span>
                    {new Date(createdAt).toLocaleDateString("sv-SE", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </p>
              </div>
              <p className={s.blogPostSub}>{sub}</p>
              <p className={s.blogPostContent}>{content}</p>
            </div>
          </a>
        </li>
      </Link>
    </>
  );
};
