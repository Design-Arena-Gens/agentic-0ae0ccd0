import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DreamsLabelsByHarshita - Social Media AI Manager',
  description: 'AI-powered social media management for women\'s ethnic wear brand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
