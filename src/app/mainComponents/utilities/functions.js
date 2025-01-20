'use client';
import { useEffect } from "react";

export const GTag =()=>{
 useEffect(() => {
     
     const getGTMTag = `
     (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
     })(window,document,'script','dataLayer','GTM-N699QL23');
     `;
    
     
     let createScript = document.createElement("script");
     createScript.innerHTML = getGTMTag;
     document.head.appendChild(createScript);  
    })

}
export const GTagEnd =()=>{
 useEffect(() => { 
     let createNoScript = document.createElement("noscript");
     let createIframe = document.createElement("iframe");
     createIframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-N699QL23";
     createIframe.height = "0";
     createIframe.width = "0";
     createIframe.style.display = "none";
     createIframe.style.visibility = "hidden";
     createNoScript.appendChild(createIframe);
     document.body.appendChild(createNoScript);  
    })

}