"use client"; // Indicates that this code runs on the client side

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Importing components for a sheet UI
import { navLinks } from "@/constants"; // Importing navigation links from constants file
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"; // Importing authentication components from Clerk for Next.js
import Image from "next/image"; // Importing the optimized Image component from Next.js
import Link from "next/link"; // Importing the Link component for client-side navigation
import { usePathname } from "next/navigation"; // Importing hook for accessing the current URL pathname
import { Button } from "../ui/button"; // Importing custom Button component from UI folder

// Define MobileNav component as a functional component
const MobileNav = () => {
  const pathname = usePathname(); // Getting the current URL pathname

  return (
    <header className="header">
      {/* Header container */}
      <Link href="/" className="flex items-center gap-2 md:py-2">
        {/* Logo link */}
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>
      <nav className="flex gap-2">
        {/* Navigation section */}
        <SignedIn>
          {/* Render if user is signed in */}
          <UserButton afterSignOutUrl="/" />{" "}
          {/* Render user button for signed-in users */}
          <Sheet>
            {/* Sheet for mobile navigation */}
            <SheetTrigger>
              {/* Trigger for showing/hiding sheet */}
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              {/* Content inside the sheet */}
              <>
                <Image
                  src="/assets/images/logo-text.svg"
                  alt="logo"
                  width={152}
                  height={23}
                />

                <ul className="header-nav_elements">
                  {/* List of navigation elements */}
                  {navLinks.map((link) => {
                    // Mapping and rendering navigation links
                    const isActive = link.route === pathname; // Check if link is active

                    return (
                      <li
                        className={`${
                          isActive && "gradient-text" // Apply active styles if link is active
                        } p-18 flex whitespace-nowrap text-dark-700`}
                        key={link.route}
                      >
                        <Link
                          className="sidebar-link cursor-pointer"
                          href={link.route}
                        >
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                          />
                          {link.label} {/* Link label */}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          {/* Render if user is signed out */}
          <Button asChild className="button bg-purple-gradient bg-cover">
            {/* Styled button */}
            <Link href="/sign-in">Login</Link> {/* Login link */}
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav; // Export MobileNav component
