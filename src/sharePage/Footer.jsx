import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const menuItems = ["Recipes", "Blog", "Contact", "About us"];
  const socialIcons = [FaFacebookF, FaTwitter, FaInstagram];

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Logo & Text */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Foodie<span className="text-orange-500">land.</span></h1>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        {/* Center Section - Navigation */}
        <ul className="flex space-x-6 text-gray-700 text-sm font-medium">
          {menuItems.map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-orange-500">
              <Link to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}>{item}</Link>
            </li>
          ))}
        </ul>

        {/* Right Section - Social Icons */}
        <div className="flex space-x-4 text-gray-700 text-lg">
          {socialIcons.map((Icon, index) => (
            <Icon key={index} className="cursor-pointer hover:text-orange-500" />
          ))}
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center text-gray-500 text-sm py-4 border-t">
        © 2024 <span className="text-red-500 font-medium">SpaceZee</span>
      </div>
    </footer>
  );
};


