import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "./Components/Navbar";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Furniro",
  description: "Premium Furniture Store",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <StoreProvider>
            <Navbar />
            {children}

            <footer className="bg-white border-t border-gray-200 py-10 px-6 md:px-16">
  <div className="flex flex-col md:flex-row gap-10">
    <div className="md:w-1/4">
      <h1 className="text-3xl font-bold">Furniro.</h1>
    </div>
    <div className="flex flex-col sm:flex-row flex-wrap gap-10 justify-between flex-1">
      <div>
        <h2 className="text-gray-400 font-medium mb-8">Links</h2>
        <ul className="space-y-6 text-black">
          <li><a href="#" className="hover:text-gray-600">Home</a></li>
          <li><a href="#" className="hover:text-gray-600">Shop</a></li>
          <li><a href="#" className="hover:text-gray-600">About</a></li>
          <li><a href="#" className="hover:text-gray-600">Contact</a></li>
        </ul>
      </div>

      <div>
        <h2 className="text-gray-400 font-medium mb-8">Help</h2>
        <ul className="space-y-6 font-medium text-black">
          <li><a href="#" className="hover:text-gray-600">Payment Options</a></li>
          <li><a href="#" className="hover:text-gray-600">Returns</a></li>
          <li><a href="#" className="hover:text-gray-600">Privacy Policies</a></li>
        </ul>
      </div>

      <div className="min-w-[200px]">
        <h2 className="text-gray-400 font-medium mb-4">Newsletter</h2>
        <form className="flex items-center">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="border-b border-black focus:outline-none focus:border-gray-500 flex-grow py-1 text-sm min-w-0"
          />
          <button
            type="submit"
            className="text-black font-semibold ml-2 hover:text-gray-600 border-b py-1 border-black whitespace-nowrap"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  </div>

  <div className="border-t border-gray-300 mt-8 pt-6">
    <p className="text-sm text-black">2023 Funiro. All rights reserved</p>
  </div>
</footer>
          </StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}