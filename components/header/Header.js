import s from "./Header.module.scss";
import Link from "next/link";
export const Header = () => {
  return (
    <div className={`${s.headerSticky}`}>
      <header className={`${s.header} container`}>
        <span>Markus Wiland</span>
        <nav className={s.nav}>
          <ul className={`${s.nav_links}`}>
            <li className={`${s.nav_links} li `}>
              <Link href="#" Link>
                <a>Hem</a>
              </Link>
            </li>
            <li className={`${s.nav_links} li`}>
              <Link href="#">
                <a>Blogg</a>
              </Link>
            </li>
            <li className={`${s.nav_links} li`}>
              <Link href="#">
                <a>Projekt</a>
              </Link>
            </li>
            <li className={`${s.nav_links} li`}>
              <Link href="#">
                <a>Om Mig</a>
              </Link>
            </li>
            <li className={`${s.nav_links} li`}>
              <Link href="#">
                <a>Kontakta Mig</a>
              </Link>
            </li>
          </ul>
        </nav>
        <span>Icon</span>
      </header>
    </div>
  );
};
