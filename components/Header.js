import Link from "next/link";
import Search from "./Search";
import styles from "@/styles/Header.module.css";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Punk Shows</a>
        </Link>
      </div>

      <Search />

      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Shows</a>
            </Link>
          </li>
          <li>
            <Link href="/events/add">
              <a>Add Event</a>
            </Link>
          </li>
          <li>
            <Link href="/account/login">
              <a className="btn-seconadry btn-icon">
                <FaSignInAlt />
                Login
              </a>
            </Link>
          </li>
          <li>
            <Link href="/account/login">
              <a className="btn-seconadry btn-icon">
                <FaSignOutAlt />
                Logout
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
