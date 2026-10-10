import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BurmaVoice',
  description: 'Independent newsroom covering politics, business, culture and public life.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
