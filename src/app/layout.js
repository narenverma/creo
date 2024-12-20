 
import "bootstrap/dist/css/bootstrap.min.css"; 
import StyledComponentsRegistry from "./products/stackz/components/styledCompLoader";

export const metadata = {
  title: "Creo",
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
