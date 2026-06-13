import "./globals.css";
import { Fredoka, Poppins } from "next/font/google";
import Layout from "./components/Layout";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "New Day, New Song",
  description: "A new song every day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${poppins.variable}`}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
