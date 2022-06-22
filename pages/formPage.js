import { Form } from "@components/form";
import { Layout } from "@components/layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function formPage() {
  return (
    <Layout>
      <Form />
      <ToastContainer />
    </Layout>
  );
}
