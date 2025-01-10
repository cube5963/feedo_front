import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

export const metadata: Metadata = {
  title: "FEEDO",
  description: "最高のアンケートApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="page-body">
        <AppRouterCacheProvider>
          <Header />
          <div className="content">{children}</div>
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
