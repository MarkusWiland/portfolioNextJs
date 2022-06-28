import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import s from "@styles/Main.module.scss";
import { supabaseAdmin } from "../../utils/supabaseClient";
export const Form = () => {
  const { user, signOut } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (post) => {
    try {
      await supabaseAdmin.storage
        .from("images")
        .upload(`${post.file[0].name}`, post.file[0]);

      await supabaseAdmin.from("posts").insert([
        {
          title: post.title,
          sub: post.sub,
            user_id: user.id,
            email: user.email,
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
