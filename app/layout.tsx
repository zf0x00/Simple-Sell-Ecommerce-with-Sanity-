"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { themes } from './themes'
import Header from './components/Navbar/Header'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <title>Simple Buy</title>
      <meta title='Simple Buy Store'content='Sell simple'></meta>
      <link rel='icon' type='image/png' sizes='32x32' href='shopping_cart.png' />
      </head>
      <body className={inter.className}>
      <CacheProvider>
      <ChakraProvider theme={themes} >
      <Header/>
        {children}
      </ChakraProvider>
    </CacheProvider>
        </body>
    </html>
  )
}
