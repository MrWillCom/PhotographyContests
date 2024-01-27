'use client'

import { ThemeProvider } from 'next-themes'
import { Theme } from '@radix-ui/themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <Theme accentColor="amber" grayColor="slate" radius="small">
        {children}
      </Theme>
    </ThemeProvider>
  )
}
