import React from 'react'
import { ClientOnly } from './components/clientonly/ClientOnly'
import NavBar from './components/navbar/NavBar'
import './globals.css'
import { Nunito } from 'next/font/google'
import RegisterModal from './components/modals/registermodal/RegisterModal'
import ToastProvider from './providers/ToastProvider'
import getCurrentUser from './actions/getCurrentUser'
import LoginModal from './components/modals/loginmodal/LoginModal'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Vacation Homes & Condo Rentals - Airbnb',
  description: 'Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Airbnb.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToastProvider />
          <LoginModal />
          <RegisterModal />
          <NavBar currentUser={ currentUser }/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
