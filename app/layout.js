import "../styles/globals.css";

export const metadata = {
  title: "CCC Fixtures",
  description: "Club Cricket — Premier League Fixtures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
