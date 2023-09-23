import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agro_Marketplace",
  description: "Website for farmers to connect potential customers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}