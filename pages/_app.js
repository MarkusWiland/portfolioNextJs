import "../styles/globals.scss";
import { useEffect } from "react";
import "react-tippy/dist/tippy.css";
import { AuthProvider } from "../components/auth/Auth";
import { supabaseAdmin, supabase } from "../utils/supabaseClient";
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider supabaseAdmin={supabase}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
