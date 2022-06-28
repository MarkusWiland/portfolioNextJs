import { Layout } from "@components/index";
import { createClient } from "@supabase/supabase-js";
import "../styles/globals.scss";
import { AuthProvider } from "../components/auth/Auth";
import { supabaseAdmin } from "../utils/supabaseClient";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider supabaseAdmin={supabaseAdmin}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
