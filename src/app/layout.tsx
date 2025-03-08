import type { Metadata } from "next";
import { Lato, Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Winegarten-Achatz Leadgen Flow",
  description:
    "LinkedIn RFP https://www.linkedin.com/feed/update/urn:li:activity:7303574495842156544?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7303574495842156544%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${lato.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        >
          <div className="relative min-h-screen w-full overflow-hidden">
            <div className="relative flex min-h-screen w-full items-center justify-center">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
