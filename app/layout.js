import "./globals.css";

export const metadata = {
  title: "New Day, New Song",
  description: "A new song every day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
