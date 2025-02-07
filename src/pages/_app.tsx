import "./globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { NextUIProvider } from "@nextui-org/react";
import { GoogleAnalytics, event } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const handleRouteChange = (url) => {
    event("page_view", { page_path: url });
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <GoogleAnalytics trackPageViews />
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}
