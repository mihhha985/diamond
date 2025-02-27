import { Metadata } from 'next'
import { Cormorant_SC } from 'next/font/google';
import Providers from '@/component/Provider';
import { Suspense } from "react";
import { Metrika } from "@/component/metrica/Metrica";
import '@/styles/globals.css';

const inter = Cormorant_SC({ 
  subsets: ['latin', 'cyrillic'], 
  weight: ['300', '400', '500', '700'],
  display: 'block',
  variable: '--font-inter',
});

export const metadata : Metadata = {
  title: 'Dianond Club | Эскортницы, модели, содержанки',
  description: 'Знакомства с девушками модельной внешности для сопровождения содержания и пикантных встреч...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png"  type="image/png"/>
      </head>
      <body className={inter.className}>
				<Suspense>
					<Metrika />
				</Suspense>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
