import Button from "./Button";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export default function Page({ children }) {
  return (
    <div className="page">
      <Head>
        <title>Lernen | Learn Web Development with your Personal Tutor</title>
        <meta property="og:title" content="Lernen | Become a Web Developer" />
        <meta property="og:url" content="https://lernen.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Learn just 2 hours a day to get a new income. Try for free and continue just at ₹100 per day."
        />
        <link rel="apple-touch-icon" href="favcon.ico" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" />
        <meta property="og:image" content="card.png" />
        <meta name="theme-color" content="rgb(0, 191, 111)" />
      </Head>

      {/* PLERDY  */}

      <Script
        type="text/javascript"
        defer={true}
        dangerouslySetInnerHTML={{
          __html: `
          var _protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
          var _site_hash_code = "387d3a4341852c8e256ae110678d8538";
          var _suid = 20798;`,
        }}
      />

      <Script
        type="text/javascript"
        defer={true}
        src="https://a.plerdy.com/public/js/click/main.js"
      />

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

      {/* SMARTLOOK */}

      <Script
        type="text/javascript"
        defer={true}
        dangerouslySetInnerHTML={{
          __html: `window.smartlook || (function (d) {
                    var o = smartlook = () => o.api.push(arguments);
                    var h = d.getElementsByTagName('head')[0];
                    var c = d.createElement('script');
                    o.api = new Array();
                    c.async = true;
                    c.type = 'text/javascript';
                    c.charset = 'utf-8';
                    c.src = 'https://rec.smartlook.com/recorder.js';
                    h.appendChild(c);
                  })(document);
                  smartlook('init', 'd125c3a92ffff36074366104a38f9858df55bc2c');`,
        }}
      />

      {/* PIWIK PRO */}

      <Script
        type="text/javascript"
        defer={true}
        dangerouslySetInnerHTML={{
          __html: `
          (function(window, document, dataLayerName, id) {
          window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
          function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}
          var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
          var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
          tags.async=!0,tags.src="https://lernen.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
          !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
          })(window, document, 'dataLayer', 'dd403b4c-3b6b-45c0-a6b1-0b2095be1b67');
          `,
        }}
      />
      <noscript>
        <iframe
          src="https://lernen.containers.piwik.pro/dd403b4c-3b6b-45c0-a6b1-0b2095be1b67/noscript.html"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

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
