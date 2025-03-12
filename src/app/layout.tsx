import "@/styles/globals.css";
import "@/styles/gaming-theme.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GamingLayout } from "@/components/gaming-layout";

import { Poppins, Manrope } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata = {
  title: "Rahulkumar Choudhary - Portfolio",
  description: "DevOps Engineer ☸️ 🐋 🐳 and Cloud Computing Enthusiast ☁️ ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${manrope.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <GamingLayout>{children}</GamingLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
