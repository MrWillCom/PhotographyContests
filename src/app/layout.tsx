import type { Metadata } from 'next'
import '@radix-ui/themes/styles.css'
import './globals.scss'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Photography Contests',
  description: 'An all-in-one list of photography contests.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
