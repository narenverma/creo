 
import "bootstrap/dist/css/bootstrap.min.css"; 
import StyledComponentsRegistry from "./mainComponents/styledCompLoader";  
import { GTag, GTagEnd } from "./mainComponents/utilities/functions";

export const metadata = {
  title: "Creo",
  description: "Created By Hybreed.co",
  robots: "noindex,nofollow",
  icons: {
            icon: "/stackz-favicon-icon.svg", // Path to favicon
            shortcut: "/stackz-favicon-icon.svg", // Path to shortcut icon
            apple: "/stackz-favicon-icon.svg", // Path to apple touch icon
        },
};

export default function RootLayout({ children }) {
 

  return (
    <html lang="en"  >
      <body style={{opacity: 0, transition: "opacity 1000ms ease-in", }}>
      <GTag></GTag>
      <GTagEnd></GTagEnd>
      <StyledComponentsRegistry>
          {children}
      </StyledComponentsRegistry>
      </body>
    </html>
  );
}


