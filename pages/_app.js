import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "@/lib/gtag";


import MDXComponents from "@/components/MDXComponents";
import Chat from "@/components/Chat";
import PixelCat from "@/components/PixelCat";

import { SessionProvider } from "next-auth/react";

import Lenis from "@studio-freight/lenis";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  // Lenis smooth scroll disabled for instant native scrolling
  // useEffect(() => {
  //   const lenis = new Lenis({
  //       duration: 1.1,
  //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //       orientation: 'vertical',
  //       gestureDirection: 'vertical',
  //       smooth: true,
  //       smoothTouch: false,
  //       touchMultiplier: 2,
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   // Cleanup
  //   return () => {
  //       lenis.destroy();
  //   };
  // }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <MDXProvider components={MDXComponents}>
          {/* <Banner /> */}
          <Component {...pageProps} />
          <PixelCat />
          <Chat />
        </MDXProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
