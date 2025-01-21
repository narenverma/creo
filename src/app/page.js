"use client";
 
import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { GlobalStyle, Nohemi } from "./assets/css/globalStyle";
// import { GlobalColorsStyle } from "./assets/css/theme-color";
// import HeaderMenu from "./components/headerMenu";
 
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
 
  // Ensure this runs only on the client side
  if (typeof window !== 'undefined') { 
    router.push('/products/stackz');
  }
  }, [router]);

  return <div>Redirecting...</div>; // Optionally show a message or spinner
  // return (
  //   <>
  //   <div>
  //    </div>
  //   </>
  // );
}
 
