import Link from "next/link";
import * as React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 py-6">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_APP_NAME}. All
          rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 text-sm"
            href="policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 text-sm"
            href="term"
          >
            Terms of Service
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 text-sm"
            href="contact"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
}
