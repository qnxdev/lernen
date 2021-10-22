import Button from "./Button";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export default function Page({ children }) {
  return (
    <div className="page">
      <Head>
        <title>Lernen | Learn Web Development with your Personal Tutor</title>
        <meta property="al:web:url" content="https://lernen.vercel.app/" />

        <meta property="og:title" content="Lernen | Become a Web Developer" />
        <meta property="og:url" content="https://lernen.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Lernen" />
        <meta property="og:image" content="card.png" />
        <meta
          name="og:description"
          content="Learn just 2 hours a day to get a new income. Try for free and continue just at ₹100 per day."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@lernen" />
        <meta name="twitter:url" content="https://lernen.vercel.app/" />
        <meta name="twitter:title" content="Lernen | Become a Web Developer" />
        <meta
          name="twitter:description"
          content="Learn just 2 hours a day to get a new income. Try for free and continue just at ₹100 per day."
        />
        <meta name="twitter:image" content="card.png"/>

        <meta itemprop="isFamilyFriendly" content="true" />

        <link rel="image_src" href="favicon.ico"></link>
        <link rel="apple-touch-icon" href="favicon.ico" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" />
        <meta name="theme-color" content="rgb(0, 191, 111)" />

        <meta
          name="keywords"
          content="html css javascript tutorials web development study react next js beginner design responsive front-end back-end"
        ></meta>
      </Head>

      {/* MOUSE fLOW */}

      <Script
        type="text/javascript"
        defer={true}
        dangerouslySetInnerHTML={{
          __html: `window._mfq = window._mfq || [];
                  (function () {
                    var mf = document.createElement("script");
                    mf.type = "text/javascript";
                    mf.defer = true;
                    mf.src = "//cdn.mouseflow.com/projects/e668851c-7533-4715-b1f2-346132edca24.js";
                    document.getElementsByTagName("head")[0].appendChild(mf);
                  })();`,
        }}
      />

      {/* HOTJAR */}

      <Script
        type="text/javascript"
        defer={true}
        dangerouslySetInnerHTML={{
          __html: `(function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:2664367,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      />

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
