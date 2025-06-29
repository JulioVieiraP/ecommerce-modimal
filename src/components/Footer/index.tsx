import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaTiktok,
  FaRegCopyright
} from 'react-icons/fa'
import { FaRegMessage } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-[#404040] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between">
          <section className="pt-8">
            <h4 className="font-bold text-[14px] sm:text-2xl">
              Join Our Club, Get 15% Off For Your Birthday
            </h4>
            <form className="mt-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email Address"
                required
                className="mb-2"
              />
              <button type="submit" aria-label="Subscribe">
                →
              </button>
              <div className="flex items-center gap-2 mt-2">
                <input type="checkbox" id="consent" name="consent" />
                <label
                  htmlFor="consent"
                  className="text-[10px] font-normal leading-tight break-words"
                >
                  By submitting your email, you agree to receive advertising
                  emails from Modimal.
                </label>
              </div>
            </form>
          </section>

          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mt-6">
            <div>
              <h5 className="font-bold text-[20px] mb-6">About Modimal</h5>
              <ul className="text-[14px] font-normal gap-1 flex flex-col">
                <li>
                  <a href="#">Collection</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Support System</a>
                </li>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <a href="#">Copyright Notice</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-[20px] mb-6">Help & Support</h5>
              <ul className="text-[14px] font-normal gap-1 flex flex-col">
                <li>
                  <a href="#">Orders & Shipping</a>
                </li>
                <li>
                  <a href="#">Returns & Refunds</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-[20px] mb-6">Join Up</h5>
              <ul className="text-[14px] font-normal gap-1 flex flex-col">
                <li>
                  <a href="#">Modimal Club</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Visit Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <section
          className="mt-10 flex justify-between align-center sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ alignItems: 'center' }}
        >
          <ul className="flex gap-4 text-sm">
            <li>
              <a href="#">
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebook size={24} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaPinterest size={24} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTiktok size={24} />
              </a>
            </li>
          </ul>

          <button
            className="bg-[#1f231e] text-white px-4 py-2 w-14 h-12 flex items-center justify-center align-center"
            style={{ border: '1px solid white' }}
          >
            <FaRegMessage size={20} />
          </button>
        </section>

        <div className="mt-10 pb-8">
          <p className="text-[10px] font-normal flex align-center gap-2">
            <FaRegCopyright size={18} />
            <span className="text-center flex align-center text-[12px] text-[#cbcbcb]">
              2023 Modimal. All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
