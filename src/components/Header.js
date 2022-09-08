import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import NLink from 'next/link'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Link = ({
  text,
  link = "#",
}) => (
  <div>
    <NLink href={link}>
      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
        {text}
      </a>
    </NLink>
  </div>
)

const LinkButton = ({
  text,
  link = "#",
  closeDrawer,
}) => (
  <NLink href={link}>
    <a onClick={closeDrawer} className="text-gray-300 mb-2 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium w-11/12">
      {text}
    </a>
  </NLink>
)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openDrawer = () => setIsOpen(true)
  const closeDrawer = () => setIsOpen(false)

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={closeDrawer}
        direction='left'
      >
        <div className="bg-gray-800 flex flex-col h-full items-center pt-5">
          <LinkButton closeDrawer={closeDrawer} text="Home" link="/" />
          <LinkButton closeDrawer={closeDrawer} text="About" link="/about" />
          <LinkButton closeDrawer={closeDrawer} text="Products" link="/products" />
          <LinkButton closeDrawer={closeDrawer} text="Create-Product" link="/create-product" />
        </div>
      </Drawer>
      <nav className="bg-gray-800 py-3 px-2">
        <div class="max-w-7xl text-white mx-auto">
          <div onClick={openDrawer} className="sm:hidden block cursor-pointer">
            <GiHamburgerMenu size={32} color="white" />
          </div>
          <div className="hidden sm:block">
            <div className="flex">
              <Link text="Home" link="/" />
              <Link text="About" link="/about" />
              <Link text="Products" link="/products" />
              <Link text="Create-Product" link="/create-product" />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
