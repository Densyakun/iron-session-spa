import Link from "next/link";
import useUser from "../lib/useUser";
import { useRouter } from "next/router";
import fetchJson from "../lib/fetchJson";

export default function Header({ IS_PLACE_LOGOUT_BUTTON }: { IS_PLACE_LOGOUT_BUTTON: boolean }) {
  const { user, mutateUser } = useUser();
  const router = useRouter();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {user?.isLoggedIn === true && IS_PLACE_LOGOUT_BUTTON && (
            <>
              <li>
                {/* In this case, we're fine with linking with a regular a in case of no JavaScript */}
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a
                  href="/api/logout"
                  onClick={async (e) => {
                    e.preventDefault();
                    mutateUser(
                      await fetchJson("/api/logout", { method: "POST" }),
                      false,
                    );
                    router.push("/");
                  }}
                >
                  Logout
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
      <style jsx>{`
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }

        li {
          margin-right: 1rem;
          display: flex;
        }

        li:first-child {
          margin-left: auto;
        }

        a {
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        a img {
          margin-right: 1em;
        }

        header {
          padding: 0.2rem;
          color: #fff;
          background-color: #333;
        }
      `}</style>
    </header>
  );
}
