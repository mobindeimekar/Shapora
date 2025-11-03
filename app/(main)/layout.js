import localFont from "next/font/local";
import "./globals.css";
import MainNavigation from "@/components/layouts/navigation/MainNavigation";
import Footer from "@/components/layouts/Footer";
import Sidebar from "@/components/layouts/Sidebar";
import ReduxProvider from "@/redux/reduxProvider";

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/poppins/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins/Poppins-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Your App",
  description: "Next.js professional structure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="bg-defaultBg">
        <ReduxProvider>
          <MainNavigation />
          <Sidebar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
