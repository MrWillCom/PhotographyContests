import type { Metadata } from 'next'
import '@radix-ui/themes/styles.css'
import './globals.scss'

import { Theme } from '@radix-ui/themes'

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
    <html lang="en">
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  )
}
