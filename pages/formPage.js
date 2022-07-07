import { useAuth } from "@components/auth/Auth";
import { Form } from "@components/form";
import { Layout } from "@components/layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { supabase } from "../utils/supabaseClient";
export default function FormPage({ user }) {
  console.log(user);
  return (
    <Layout>
      <Form />
      <ToastContainer />
    </Layout>
  );
}
export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return { props: {}, redirect: { destination: "/", permanent: false } };
  }

  return { props: { user } };
}
