import BlackFriday from "@/components/BlackFriday";
import "@/styles/styles.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Money-fest",
  description: "Money-fest. Corporate website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BlackFriday />
        {children}
      </body>
    </html>
  );
}
