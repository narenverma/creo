 
import "bootstrap/dist/css/bootstrap.min.css"; 
import StyledComponentsRegistry from "./products/stackz/components/styledCompLoader";
// import { GlobalStyle, Nohemi } from "./products/stackz/assets/css/globalStyle";
// import { GlobalColorsStyle } from "./products/stackz/assets/css/theme-color";
// import HeaderMenu from "./products/stackz/components/headerMenu";
// import FooterMenu from "./products/stackz/components/footerMenu";

export const metadata = {
  title: "Creo Web App",
  description: "Created By Hybreed.co",
  robots: "noindex,nofollow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  >
      <body >
      <StyledComponentsRegistry>
          {children}
      </StyledComponentsRegistry>
      </body>
    </html>
  );
}
