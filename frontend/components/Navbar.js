import Link from "next/link"
import NextImage from "./Image"

const Navbar = () => {
  return (
    <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100">
      <div className="container flex justify-between items-center h-auto mx-auto">
        <Link href="/">
          <a>
            <NextImage
              src="/lynux-logo.png"
              alt="home"
              className="logo"
              height="auto"
              width="200" />
          </a>
        </Link>
        <ul className="items-center hidden space-x-3 md:flex">
          <li className="flex">
            <Link href="/about" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">About</Link>
          </li>
          <li className="flex">
            <Link href="/contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Contact</Link>
          </li>
          <li className="flex">
          <button className="snipcart-checkout flex items-center">
          <NextImage height="150" width="150" src="/cart.svg" alt="Cart" />
          <span className="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500"></span>
        </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
