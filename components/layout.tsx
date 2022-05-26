import React from 'react'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }: {children?: React.ReactNode}) => {
  return (
    <div className="flex flex-col h-screen justify-between font-content antialiased">
      <main className="mb-auto">{children}</main>
    </div>
  )
}

export default Layout
