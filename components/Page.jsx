import Button from "./Button";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Referlink from "../components/Referlink";

export default function Page({ children, refLink = true }) {
  const title = "Lernen | Become a Web Developer",
    description =
      "Learn just 2 hours a day to get a new income. Try free for first 3 days and Learn Web Development.",
    icon = "https://lernen.vercel.app/card.jpg",
    site_name = "Lernen",
    url = "https://lernen.vercel.app/",
    favicon = "/favicon.ico",
    theme = "rgb(0, 191, 111)",
    keywords =
      "html, css, javascript, tutorials, web, development, study, react, next, js, beginner, design, responsive, front-end, back-end";
  return (
    <div className="page">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="al:web:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site_name} />
        <meta property="og:image" content={icon} />
        <meta name="og:description" content={description} />
        <meta name="description" content={description} />
        {/* <meta name="robots" content="index, follow" /> */}

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@lernen" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={icon} />

        <meta name="theme-color" content={theme} />
        <meta name="keywords" content={keywords} />
        <meta itemProp="isFamilyFriendly" content="true" />

        <link rel="image_src" href={icon} />
        <link rel="icon" href={icon} />
        <link rel="canonical" href={url} />

        <link rel="apple-touch-icon" href={favicon} />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
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
          <Link href="/contact">
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
      {refLink && <Referlink />}
      <main className="main">{children}</main>

      <footer className="footer flex">
        <Link href="/contact">
          <a>
            <button className="contact">Contact Us</button>
          </a>
        </Link>
        <span>&copy; {new Date().getFullYear()} Lernen.</span>
      </footer>
    </div>
  );
}
