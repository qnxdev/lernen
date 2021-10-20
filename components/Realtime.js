export default async function Realtime() {
  let ua = {};
  if (navigator) {
    if (navigator.platform) {
      let p = navigator.platform;
      if (p.indexOf("Win") != -1) ua.os = "Windows";
      if (p.indexOf("Mac") != -1) ua.os = "MacOS";
      if (p.indexOf("X11") != -1) ua.os = "UNIX";
      if (p.indexOf("iPhone") != -1) ua.os = "iOS";
      if (p.indexOf("Linux") != -1) ua.os = "Linux";
      if (p.indexOf("Android") != -1) ua.os = "Android";
    }
    if (navigator.userAgent) {
      const u = navigator.userAgent;
      if (u.includes("Mobile")) {
        ua.type = "Mobile";
      } else {
        ua.type = "Desktop";
      }
      if (u.includes("Safari") && (u.includes("Mac") || u.includes("iPhone"))) {
        //version u.split(" ").find(i=>i.includes("Safari/")).replace("Safari/","")
        ua.browser = "Apple Safari";
      } else if (u.includes("Opera") || u.includes("OPR")) {
        ua.browser = "Opera";
      } else if (u.includes("Edge") || u.includes("Edg")) {
        ua.browser = "Microsoft Edge";
      } else if (u.includes("MSIE")) {
        ua.browser = "Internet Explorer";
      } else if (u.includes("Firefox") || u.includes("FxiOS")) {
        ua.browser = "Mozilla Firefox";
      } else if (navigator.brave) {
        ua.browser = "Brave Browser";
      } else if (u.includes("Chromium")) {
        ua.browser = "Chromium";
      } else if (u.includes("Chrome") || u.includes("CriOS")) {
        ua.browser = "Google Chrome";
      } else {
        ua.browser = "Unknown Browser";
      }
    }
  }
  try {
    const promise = await fetch(
      "/api/realtime?ua=" + encodeURIComponent(JSON.stringify(ua))
    );
    const { success } = await promise.json();
    if (success) {
      console.log("Realtime request complete.");
    } else {
      console.log("Realtime update failed.");
    }
  } catch (error) {
    console.log("Realtime request failed.");
  }
}
