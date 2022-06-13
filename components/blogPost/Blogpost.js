import React from "react";
import Image from "next/image";
import Link from "next/link";
import s from "@styles/Main.module.scss";
export const Blogpost = ({ title, image, id, content }) => {
  console.log(image);
  return (
    <>
      <li>
        <a>
          <div className={s.imageSize}>
            <Image
              src={`https://viavzfdziwgbjvrkzhmz.supabase.co/storage/v1/object/public/images/${image}`}
              layout="fill"
              alt="text"
            />
          </div>
          <div className={s.blogPostsInfo}>
            <Link href={`/blog/${id.toString()}`}>
              <h4>{title}</h4>
            </Link>
            <div>
              <div>
                icon <span>text</span>
              </div>
              <div>
                icon <span>text</span>
              </div>
            </div>
            <p>{content}</p>
            <p>mer text</p>
          </div>
        </a>
      </li>
    </>
  );
};
