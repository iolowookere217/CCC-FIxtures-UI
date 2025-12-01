import "../styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "CCC Fixtures",
  description: "Club Cricket — Premier League Fixtures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
