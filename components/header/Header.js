import s from "./Header.module.scss";
import Link from "next/link";
import { useAuth } from "@components/auth/Auth";
import { useState } from "react";

export const Header = () => {
  const { user, signOut } = useAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={`${s.headerSticky}`}>
      <header className={`${s.header} container`}>
        <div>
          {!user ? (
            <>
              <input
                className="inputField"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin(email);
                }}
                className="button block"
                disabled={loading}
              >
                <span>{loading ? "Loading" : "Send magic link"}</span>
              </button>
            </>
          ) : (
            <button onClick={signOut}>sign out</button>
          )}
        </div>
        <span>Markus Wiland</span>

        <nav className={s.nav}>
          <ul className={`${s.nav_links}`}>
            <li className={`${s.nav_links} li `}>
              <Link href="/">
                <a>Hem</a>
              </Link>
            </li>
            <li className={`${s.nav_links} li`}>
              <Link href="/blog">
                <a>Blogg</a>
              </Link>
            </li>
            <li className={`${s.nav_links} li`}>
              <Link href="/projects">
                <a>Projekt</a>
              </Link>
            </li>
            <li className={`${s.nav_links} li`}>
              <Link href="/about">
                <a>Om Mig</a>
              </Link>
            </li>
            <li className={`${s.nav_links} li`}>
              <Link href="contact">
                <a>Kontakta Mig</a>
              </Link>
            </li>
            {!user ? null : (
              <li className={`${s.nav_links} li`}>
                <Link href="/formPage">
                  <a>Lägg till</a>
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <span>Icon</span>
      </header>
    </div>
  );
};
