import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => (
  <header className="bg-white sm:h-20 py-5 border-b sm:sticky top-0">
    <div className="max-w-5xl mx-auto px-6">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
          <div>
            <h1 className="">
              BONGHA
            </h1>
          </div>
          <img src="/dgitech-logo.png" className="w-48" alt="BONGHA" />
        </div>
      </div>
    </div>
  </header>
)

export default Header
