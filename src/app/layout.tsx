import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Header from "./_components/header";
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
          <div style={{ marginTop: '10rem' }}>{children}</div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
