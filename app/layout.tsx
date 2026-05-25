import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Rate Limit Forecaster — Predict Before You Hit the Wall',
  description: 'Monitor API usage patterns, predict rate limit breaches, and get optimal request timing suggestions. Built for backend developers and DevOps engineers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="368ee3f3-fc4e-45c4-86b7-5ea0840f27fe"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
