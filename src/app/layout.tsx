import { Lexend } from 'next/font/google';
import './globals.css';

import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';
import ProviderStore from '@/redux/ProviderStore';
import RefetchUser from '@/components/refetchUser';

const lexend = Lexend({
  weight: ['400', '100', '200', '300', '500', '600', '700'], // Thêm các trọng số bạn cần
  subsets: ['latin', 'vietnamese'], // Thêm subset "vietnamese" nếu cần
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} dark:bg-gray-900`}>
        <ProviderStore>
          <ThemeProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </ThemeProvider>
          <RefetchUser/>
        </ProviderStore>
      </body>
    </html>
  );
}
