import Footer from "./components/Hcomp/Footer";
import Navbar from "./components/Hcomp/Navbar";
import "./globals.css";

export const metadata = {
  title: "SCFN",
  description: "Sickle Cell Foundation In Nigeria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-[100%] text-base font-lexend overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
