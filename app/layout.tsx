import React from 'react'
import { ClientOnly } from './components/ClientOnly/ClientOnly'
import Modal from './components/modals/Modal'
import NavBar from './components/navbar/NavBar'
import './globals.css'
import { Nunito } from 'next/font/google'
import RegisterModal from './components/modals/registermodal/RegisterModal'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Vacation Homes & Condo Rentals - Airbnb',
  description: 'Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Airbnb.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <RegisterModal />
          <NavBar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
