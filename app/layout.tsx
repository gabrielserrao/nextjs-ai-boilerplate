import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "../lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";


const IBMPlex = IBM_Plex_Sans({ 
    subsets: ["latin"],
    weight: ['400', '500', '600', '700'],
    variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "Ai powered generator by AiSerraLabs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5'},
    }}> 
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased" , IBMPlex.variable)}>
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
