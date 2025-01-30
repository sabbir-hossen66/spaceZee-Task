import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Recipes", path: "/recipes" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "About Us", path: "/about-us" }
  ];

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/">Foodie<span className="text-orange-500">land.</span></Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {menuItems.map(({ name, path }) => (
            <li key={name} className="cursor-pointer transition duration-300 ease-in-out hover:text-orange-500">
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-5 text-xl">
          {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, index) => (
            <Icon key={index} className="cursor-pointer hover:text-orange-500" />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md text-center space-y-4 py-6">
          {menuItems.map(({ name, path }) => (
            <li key={name} className="text-lg font-medium hover:text-orange-500 cursor-pointer">
              <Link to={path} onClick={() => setIsOpen(false)}>{name}</Link>
            </li>
          ))}
          <div className="flex justify-center space-x-5 text-xl pt-4">
            {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, index) => (
              <Icon key={index} className="cursor-pointer hover:text-orange-500" />
            ))}
          </div>
        </ul>
      )}
    </nav>
  );
};
