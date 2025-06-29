import Image from 'next/image'
import Link from 'next/link'
import { FaSearch, FaRegUser } from 'react-icons/fa'
import { IoMdMenu } from 'react-icons/io'
import { MdFavoriteBorder, MdOutlineShoppingBag } from 'react-icons/md'

const Header = () => {
  return (
    <header>
      <div className="flex justify-center items-center h-4 sm:h-8 bg-[#748C70] ">
        <p className="text-white text-[10px] font-normal sm:text-xs">
          Enjoy Free Shipping On All Orders
        </p>
      </div>

      <div className="w-full bg-white text-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center h-12 sm:h-16">
          <div className="flex items-center gap-2 sm:hidden">
            <button aria-label="Open menu">
              <IoMdMenu size={24} />
            </button>
            <button aria-label="Search">
              <FaSearch size={18} />
            </button>
          </div>

          <div className="flex items-center justify-center">
            <Link href="/">
              <Image
                src="/mobile/Logo-mobile.svg"
                alt="Logo da loja"
                width={138}
                height={40}
                className="object-cover"
              />
            </Link>
          </div>

          <nav className="hidden sm:block">
            <ul className="flex items-center gap-8 max-w-4xl w-full">
              <li>
                <Link
                  href="/"
                  className="text-[18px] font-normal text-[#404040]"
                >
                  Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-[18px] font-normal text-[#404040]"
                >
                  New In
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[18px] font-normal text-[#404040]"
                >
                  Modiweek
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[18px] font-normal text-[#404040]"
                >
                  Plus Size
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-[18px] font-normal text-[#404040]"
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-8 text-[#0C0C0C]">
            <button className="hidden sm:block">
              <FaSearch size={18} />
            </button>
            <button className="hidden sm:block">
              <FaRegUser size={18} />
            </button>
            <button>
              <MdFavoriteBorder size={20} />
            </button>
            <button>
              <MdOutlineShoppingBag size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
