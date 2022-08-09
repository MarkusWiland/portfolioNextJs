import s from "./Header.module.scss";

import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";
import { useAuth } from "@components/auth/Auth";
import { useState } from "react";

import Modal from "react-modal";
import { FiLogIn, FiSun, FiMoon } from "react-icons/fi";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    padding: "2rem",
    width: "300px",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

import { supabase } from "../../utils/supabaseClient";
export const Header = () => {
  Modal.setAppElement("body");
  const router = useRouter();
  console.log(router.pathname);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { user, signOut } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [updatePassword, setUpdatePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleupdate = async () => {
    const { data } = await supabase.auth.update({ password: updatePassword });
    toast.success("Du har nu uppdaterat lösenordet", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 3000,
    });

    setUpdatePassword("");
    return data;
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;

      setIsOpen(false);
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };
  return (
    <div className={`${s.headerSticky}`}>
      <header className={`${s.header} container`}>
        <div className={s.absolut}>
          {!user ? (
            <button onClick={openModal}>
              <FiLogIn size={20} />
            </button>
          ) : (
            <>
              <button onClick={signOut}>sign out</button>
              <input
                type="password"
                value={updatePassword}
                onChange={(e) => setUpdatePassword(e.target.value)}
              />
              <button onClick={handleupdate}>update</button>
            </>
          )}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel=""
        >
          <>
            <h3>Logga in</h3>
            <form onSubmit={handleLogin} className={s.form}>
              <input
                className="inputField"
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="inputField"
                type="password"
                name="password"
                autoComplete="current-password"
                required
                placeholder="Lösenord..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button disabled={loading}>
                <span>{loading ? "Loading" : "Logga in"}</span>
              </button>
            </form>
          </>
        </Modal>

        <span>Markus Wiland</span>

        <nav className={s.nav}>
          <ul className={`${s.nav_links}`}>
            <li className={`${s.nav_links} li `}>
              <Link href="/">
                <a className={router.pathname === "/" ? "active" : ""}>Hem</a>
              </Link>
            </li>
            <li className={`${s.nav_links} li`}>
              <Link href="/blogg">
                <a className={router.pathname === "/blogg" ? "active" : ""}>
                  Blogg
                </a>
              </Link>
            </li>
            <li className={`${s.nav_links} li`}>
              <Link href="/projects">
                <a className={router.pathname === "/projects" ? "active" : ""}>
                  {" "}
                  Projekt
                </a>
              </Link>
            </li>
            <li className={`${s.nav_links} li`}>
              <Link href="/about">
                <a className={router.pathname === "/about" ? "active" : ""}>
                  Om Mig
                </a>
              </Link>
            </li>
            <li className={`${s.nav_links} li`}>
              <Link href="/contact">
                <a className={router.pathname === "/contact" ? "active" : ""}>
                  Kontakta Mig
                </a>
              </Link>
            </li>
            {user ? (
              <li className={`${s.nav_links} li`}>
                <Link href="/formPage">
                  <a className={s.add}>Lägg till</a>
                </Link>
              </li>
            ) : null}
          </ul>
        </nav>
        <span className={s.nightMode}>
          {" "}
          {true ? <FiSun size={20} /> : <FiMoon size={20} />}
        </span>
      </header>
    </div>
  );
};
export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    console.log("Please login.");
    return { props: {}, redirect: { destination: "/", permanent: false } };
  }

  return { props: { user } };
}
