import './globals.css'
import Head from 'next/head';
import type { Metadata } from 'next'
import { Rowdies, Varela_Round, Nunito, Comfortaa } from 'next/font/google'

const rowdies = Rowdies({
  subsets: ['latin'],
  weight: "300",
  variable: '--font-rowdies'
})

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: "300",
  variable: '--font-comfortaa'
})

const varelaRound = Varela_Round({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-varelaRound'
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: "300",
  variable: '--font-nunito'
})

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
    <html lang="en" className={`${rowdies.variable} ${comfortaa.variable} ${varelaRound.variable} ${nunito.variable}`}>
      <Head>
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "0cde679152d1418f866ec4fd8ac69450"}'></script>
      </Head>
      <body>{children}</body>
    </html>
  )
}
