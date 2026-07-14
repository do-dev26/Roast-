import './globals.css';

export const metadata = {
  title: 'Entertainment Hub',
  description: 'Your photo, ten AI machines, endless entertainment.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body">{children}</body>
    </html>
  );
}
