import Button from "./Button";
import Link from "next/link";
import Head from "next/head";

export default function Page({ children }) {
  return (
    <div className="page">
      <Head>
        <title>Lernen | Learn Web Development with your Personal Tutor</title>
        <meta property="og:title" content="Lernen | Learn Web Development with your Personal Tutor" />
        <meta property="og:url" content="https://lernen.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="description" content="With just 2 hours a day become a Web Developer. Try for free and continue just at ₹100 per day. Sign Up today & invite your friends." />
        <link rel="apple-touch-icon" href="favcon.ico" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="icon" href="favicon.ico" />
        <meta property="og:image" content="card.png"/>
      <script type="text/javascript">
        {`
            window._mfq = window._mfq || [];
             (function() {
                let mf = document.createElement("script");
                mf.type = "text/javascript";
                mf.defer = true;
                mf.src = "//cdn.mouseflow.com/projects/e668851c-7533-4715-b1f2-346132edca24.js";
                document.getElementsByTagName("head")[0].appendChild(mf);
             })();
        `}
      </script>
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
