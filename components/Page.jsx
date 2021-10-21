import Button from "./Button";
import Link from "next/link";
import Head from "next/head";

export default function Page({ children }) {
  return (
    <div className="page">
      <Head>
        <title>Lernen | Learn Web Technologies with your personal tutor</title>
        <meta
          name="description"
          content="With just 2 hours a day become a web developer. Try first 3 days for free and then ₹100 per day."
        />
        <link rel="icon" href="favicon.ico" />
        <meta property="og:image" content="card.png"></meta>
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
