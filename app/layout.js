import Header from '@/components/Header';
import "./globals.css";
import GlobalState from '@/context/page';
import NextAuthProvider from '@/auth-provider/page';

export const metadata = {
  title: "Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <GlobalState>
            <Header />
            <main>
              {children}
            </main>
          </GlobalState>
        </NextAuthProvider>
      </body>
    </html>
  );
}
