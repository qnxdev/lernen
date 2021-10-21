import Button from "./Button";
import Link from "next/link";
import Head from "next/head";

export default function Page({ children }) {
  return (
    <div className="page">
      <Head>
        <title>Lernen | Learn Coding</title>
        <meta
          name="description"
          content="Lernen is here now everyone can learn coding"
        />
        <link rel="icon" href="card.png" />
      </Head>

      <header className="flex stretch">
        <Link href="/">
          <h1>
            L<span>e</span>rn<span>e</span>n
          </h1>
        </Link>
        <div className="flex">
          <Link href="/">
            <a>
              <button className="contact">Contact Us</button>
            </a>
          </Link>
          <Link href="/signup">
            <a>
              <Button>Sign Up Now</Button>
            </a>
          </Link>
        </div>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Lernen.
      </footer>
    </div>
  );
}
