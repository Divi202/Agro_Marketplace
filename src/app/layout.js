import "./globals.css";
import "@/style/home.css"; // External Css
import { Inter } from "next/font/google";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

// import componets -> which are common in whole website
import Navbar from "src/Components/Navbar.js";
import Footer from "src/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agro_Marketplace",
  description: "Website for farmers to connect potential customers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bck">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
