import "../styles/globals.scss";
import { useEffect } from "react";
import "react-tippy/dist/tippy.css";
import { AuthProvider } from "../components/auth/Auth";
import { supabaseAdmin, supabase } from "../utils/supabaseClient";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider supabaseAdmin={supabase}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
