
import React from 'react'

import { GlobalStyle  } from './assets/css/globalStyle';

import { GlobalColorsStyle } from './assets/css/theme-color';
import HeaderMenu from './components/headerMenu';
import FooterMenu from './components/footerMenu'; 
import EdubitsHome from './homePage';



// export async function generateMetadata({ params, searchParams }) {
//     return {
//         title: "Stackz: Premium Fintech Design Resources | CREO",
//         description: "Explore Stackz by CREO – the ultimate resource for fintech design systems, icons, illustrations, and editable website templates. Optimize your fintech projects with Stackz.",
//         robots: "noindex,nofollow",
//         twitter: {
//             card: "summary_large_image",
//             title: "Stackz: Premium Fintech Design Resources | CREO",
//             description: "Explore Stackz by CREO – the ultimate resource for fintech design systems, icons, illustrations, and editable website templates. Optimize your fintech projects with Stackz.",
//             images: ["/stackz-meta-featured-image.png"],
//           },
//         openGraph: {
//             title: "Stackz: Premium Fintech Design Resources | CREO",
//             description: "Explore Stackz by CREO – the ultimate resource for fintech design systems, icons, illustrations, and editable website templates. Optimize your fintech projects with Stackz.",
//             images: [
//                 {
//                     url: "/stackz-meta-featured-image.png",
//                     width: 800,
//                     height: 600,
//                     alt: "Stackz: Premium Fintech Design Resources | CREO",
//                 },
//             ],
//         },
//         icons: {
//             icon: "/stackz-favicon-icon.svg", // Path to favicon
//             shortcut: "/stackz-favicon-icon.svg", // Path to shortcut icon
//             apple: "/stackz-favicon-icon.svg", // Path to apple touch icon
//         },
//     }
// }


export default function Edubits() {


    return (
        <>
            <GlobalStyle />
            <GlobalColorsStyle />
            <header>
                <HeaderMenu ></HeaderMenu>
            </header>
            <main >
                <EdubitsHome  ></EdubitsHome> 
            </main>
            <footer >
                <FooterMenu></FooterMenu>
            </footer>
        </>
    )
}
