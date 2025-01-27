import type { Metadata } from "next";
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
          <div className="content">{children}</div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
