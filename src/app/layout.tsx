import './globals.css'
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
      <body>{children}</body>
    </html>
  )
}
