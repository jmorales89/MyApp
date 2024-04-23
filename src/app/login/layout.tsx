
import "./globals.css";
import styles from "./login.module.css"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`h-full ${styles.login}`}>{children}</body>
    </html>
  );
}
