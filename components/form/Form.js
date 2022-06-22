import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import s from "@styles/Main.module.scss";
export const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (post) => {
    console.log(post.file[0]);
    try {
      await supabaseAdmin.storage
        .from("images")
        .upload(`${post.file[0].name}`, post.file[0]);

      await supabaseAdmin.from("posts").insert([
        {
          title: post.title,
          sub: post.sub,
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
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <label>Title</label>
      <input {...register("title", { required: true, maxLength: 20 })} />
      <label>sub</label>
      <input {...register("sub", { pattern: /^[A-Za-z]+$/i })} />
      <label>content</label>
      <input {...register("file")} type="file" />
      <label>img</label>
      <textarea {...register("content")} />

      <button type="submit">Skicka</button>
    </form>
  );
};
