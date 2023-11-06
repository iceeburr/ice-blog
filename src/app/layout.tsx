import './globals.css'
import Head from 'next/head';
import type { Metadata } from 'next'
import localFont from 'next/font/local';

const torus = localFont({
  src: [
    {
      path: '../../public/fonts/Torus-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Torus-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Torus-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Torus-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Torus-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Torus-Heavy.otf',
      weight: '800',
      style: 'normal',
    }
  ],
  variable: '--font-torus',
});
const rowdies = localFont({
  src: [
    {
      path: '../../public/fonts/Rowdies-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Rowdies-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Rowdies-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-rowdies',
});


export const metadata: Metadata = {
  title: "</> Coding with Love ❤️",
  description: "Everything starts off somewhere. Let's start our journey to make the world a better place for our future.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rowdies.variable} ${torus.variable}`}>
      <Head>
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "0cde679152d1418f866ec4fd8ac69450"}'></script>
      </Head>
      <body>{children}</body>
    </html>
  )
}
