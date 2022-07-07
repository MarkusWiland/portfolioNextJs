import { Layout } from "@components/layout";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Main.module.scss";
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <Layout>
      <section className={`${styles.contact}`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Förnamn"
            {...register("Förnamn", { required: true, maxLength: 80 })}
          />
          <input
            type="text"
            placeholder="Efternamn"
            {...register("Efternamn", { required: true, maxLength: 100 })}
          />
          <input
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            type="text"
            placeholder="Företag"
            {...register("Företag", { maxLength: 28 })}
          />
          <textarea {...register("Meddelande", { required: true })} />

          <input type="submit" />
        </form>
      </section>
    </Layout>
  );
}
