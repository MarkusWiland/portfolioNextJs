import { Layout } from "@components/index";
import { createClient } from "@supabase/supabase-js";
import "../styles/globals.scss";
import { AuthProvider } from "../components/auth/Auth";
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider supabaseAdmin={supabaseAdmin}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
