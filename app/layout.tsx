'use client';

import { store } from '@/shared/store/store'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import Header from '@/shared/components/header';

const inter = Inter({ subsets: ['latin'] }) 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const metadata: Metadata = {
    title: 'The Memory Remains',
    description: 'A timeline with all Evident/Valtech PT events since 2016, where we can check amazing events, successes, memorable goodbyes, etc.',
  }

  return (
    <html lang="en">
      <head>
        <title>{metadata.title as string}</title>
        <meta name='description' content={metadata.description as string} />
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
