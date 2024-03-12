import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'K-Switch',
  description: 'My portfolio site',
  icons: {
    icon:  [
      {
        url: '/2169599.jpg',
        sizes: '32x32',
      },
      {
        url: '/2169599.jpg',
        sizes: '16x16',
      }
    ]
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
