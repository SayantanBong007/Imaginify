"use client"; // Indicates that this code runs on the client side

import { navLinks } from "@/constants"; // Importing navigation links from constants file
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"; // Importing authentication components from Clerk for Next.js
import Image from "next/image"; // Importing the optimized Image component from Next.js
import Link from "next/link"; // Importing the Link component for client-side navigation
import { usePathname } from "next/navigation"; // Importing hook for accessing the current URL pathname
import { Button } from "../ui/button"; // Importing custom Button component from UI folder

// Define Sidebar component as a functional component
const Sidebar = () => {
  const pathname = usePathname(); // Getting the current URL pathname

  return (
    <aside className="sidebar">
      {/* Sidebar container */}
      <div className="flex size-full flex-col gap-4">
        {/* Flexbox container */}
        <Link href="/" className="sidebar-logo">
          {/* Logo link */}
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>
        <nav className="sidebar-nav">
          {/* Navigation section */}
          <SignedIn>
            {/* Render if user is signed in */}
            <ul className="sidebar-nav_elements">
              {/* List of navigation elements */}
              {navLinks.slice(0, 6).map((link) => {
                // Mapping and rendering navigation links
                const isActive = link.route === pathname; // Check if link is active

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white" // Apply active styles if link is active
                        : "text-gray-700" // Apply default styles if link is not active
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      {/* Navigation link */}
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`} // Apply brightness effect if link is active
                      />
                      {link.label} {/* Link label */}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="sidebar-nav_elements">
              {/* List of additional navigation elements */}
              {navLinks.slice(6).map((link) => {
                // Mapping and rendering additional navigation links
                const isActive = link.route === pathname; // Check if link is active

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white" // Apply active styles if link is active
                        : "text-gray-700" // Apply default styles if link is not active
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      {/* Navigation link */}
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`} // Apply brightness effect if link is active
                      />
                      {link.label} {/* Link label */}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                {/* User button container */}
                <UserButton afterSignOutUrl="/" showName />{" "}
                {/* Render user button */}
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            {/* Render if user is signed out */}
            <Button asChild className="button bg-purple-gradient bg-cover">
              {/* Styled button */}
              <Link href="/sign-in">Login</Link> {/* Login link */}
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar; // Export Sidebar component
