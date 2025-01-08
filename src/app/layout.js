 
import "bootstrap/dist/css/bootstrap.min.css"; 
import StyledComponentsRegistry from "./mainComponents/styledCompLoader";

export const metadata = {
  title: "Creo",
  description: "Created By Hybreed.co",
  robots: "noindex,nofollow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  >
      <body style={{opacity: 0, transition: "opacity 1000ms ease-in", }}>
      <StyledComponentsRegistry>
          {children}
      </StyledComponentsRegistry>
      </body>
    </html>
  );
}
