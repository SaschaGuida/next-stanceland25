"use client";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/event" },
    { name: "Media", href: "/media" },
    { name: "Selection", href: "/selection" },
    { name: "Shop", href: "https://shop.stanceland.com", external: true },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium dark:text-gray-100">
            <Image src="/img/logo.png" width="32" height="32" alt="Logo" className="w-8" />
          </span>
        </Link>

        {/* LOGIN Button */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <Link href="/login" className="px-6 py-2 text-white bg-[#ED4821] hover:bg-[#d33d1b] rounded-md md:ml-5">
            LOGIN
          </Link>
        </div>

        {/* Mobile Menu */}
        <Disclosure>
          {({ open, close }) => ( // 🟢 Otteniamo "close" per chiudere il menu
            <>
              <Disclosure.Button className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-[#ED4821] focus:text-[#ED4821] focus:bg-gray-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  {open ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                  ) : (
                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
                  )}
                </svg>
              </Disclosure.Button>

              {/* Mobile Menu */}
              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                {navigation.map((item, index) => (
                  <div key={index} className="w-full px-4 py-2">
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => close()} // 🟢 Chiude il menu dopo il click
                        className="text-gray-500 rounded-md hover:text-[#ED4821] focus:text-[#ED4821] focus:bg-gray-100 dark:text-gray-300 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => close()} // 🟢 Chiude il menu dopo il click
                        className="text-gray-500 rounded-md hover:text-[#ED4821] focus:text-[#ED4821] focus:bg-gray-100 dark:text-gray-300 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Desktop Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li key={index} className="mr-3 nav__item">
                {menu.external ? (
                  <a
                    href={menu.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-lg font-normal text-gray-800 rounded-md hover:text-[#ED4821] focus:text-[#ED4821] focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:focus:bg-gray-800"
                  >
                    {menu.name}
                  </a>
                ) : (
                  <Link
                    href={menu.href}
                    className="inline-block px-4 py-2 text-lg font-normal text-gray-800 rounded-md hover:text-[#ED4821] focus:text-[#ED4821] focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:focus:bg-gray-800"
                  >
                    {menu.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
