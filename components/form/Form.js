import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import s from "@styles/Main.module.scss";
import { supabaseAdmin, supabase } from "../../utils/supabaseClient";
import { useAuth } from "@components/auth/Auth";

export const Form = () => {
<<<<<<< HEAD
  const { user, signOut } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (post) => {
=======
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (post) => {
    console.log(user.id);
    console.log(user.email);
>>>>>>> 18000f607be1a12e0503a455e3cd172baa4d17df
    try {
      await supabaseAdmin.storage
        .from("images")
        .upload(`${post.file[0].name}`, post.file[0]);

      await supabaseAdmin.from("posts").insert([
        {
          title: post.title,
          sub: post.sub,
<<<<<<< HEAD
            user_id: user.id,
            email: user.email,
=======
          email: user.email,
          user_id: user.id,
>>>>>>> 18000f607be1a12e0503a455e3cd172baa4d17df
          content: post.content,
          image: post.file[0].name,
        },
      ]);
      toast.success("Du har nu lagt till en post", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000,
      });

      reset();
    } catch (err) {
      toast.error(`Något gick fel, ${err}`, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <label>Titel</label>
        <input
          placeholder="Skriv en titel..."
          {...register("title", { required: true, maxLength: 20 })}
        />
        <label>Välj en bild</label>
        <input {...register("file")} type="file" name="file" />
        <label>Skriv en sub mening</label>
        <textarea
          placeholder="Skriv en sub..."
          {...register("sub", { pattern: /^[A-Za-z]+$/i })}
        />
        <label>Meddelande</label>
        <textarea
          placeholder="Skriv ett meddelande..."
          {...register("content")}
        />

        <button type="submit">Skicka</button>
      </form>
    </>
  );
};
