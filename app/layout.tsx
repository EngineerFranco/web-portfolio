import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dev Franco',
  description: 'Franco web portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth '>
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 dark:text-opacity-95`}>
        <ActiveSectionContextProvider>
          
          <Header/>
          {children}
          <Toaster position='top-right' reverseOrder={false}/>
          <Footer/>
        </ActiveSectionContextProvider>
        
        <ThemeSwitch/>
      </body>
    </html>
  )
} 
