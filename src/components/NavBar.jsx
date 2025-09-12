import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopVisible, setDesktopVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDesktopVisible(true);
      setLogoVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className={`flex-shrink-0 text-2xl font-bold text-indigo-600 transform transition-all duration-500 ease-out ${
              logoVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            WeatherTest
          </div>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex space-x-6 transform transition-all duration-500 ease-out ${
              desktopVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Sobre
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Serviços
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-10 space-y-6">
          <a
            href="#"
            className="block text-gray-700 hover:text-indigo-600 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-indigo-600 transition"
          >
            Sobre
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-indigo-600 transition"
          >
            Serviços
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-indigo-600 transition"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}
