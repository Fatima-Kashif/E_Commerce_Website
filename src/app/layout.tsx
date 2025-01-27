import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <header className="bg-white shadow p-1 flex flex-wrap justify-between items-center">
  <div className="flex items-center ml-4 md:ml-8">
    <img src="furniro logo.png" alt="logo" className="w-[80px] h-[80px]" />
    <h1 className="text-xl font-bold font-custom text-2xl md:text-4xl">Furniro</h1>
  </div>
  
  <nav className="flex flex-wrap text-lg font-custom gap-4 md:gap-[90px] font-medium justify-center md:justify-start w-full md:w-auto">
  <Link href="/">
              Home
            
          </Link>
          <Link href="/shop">
            
              Shop
           
          </Link>
    <a href="#" className="text-black hover:text-gray-700 font-custom">About</a>
  </nav>

  {/* <div className="flex justify-around gap-4 mr-4 md:mr-[40px] items-center w-full md:w-auto "> */}
  <div className="flex justify-center gap-4 mr-4 md:mr-[40px] items-center w-full md:w-auto mt-4 md:mt-0">
  <Link href="#">
            <button>
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.3333 10V4.16669H23.6666V11.1667H21.3333M21.3333 15.8334H23.6666V13.5H21.3333M9.66665 11.1667C12.7816 11.1667 19 12.73 19 15.8334V19.3334H0.333313V15.8334C0.333313 12.73 6.55165 11.1667 9.66665 11.1667ZM9.66665 0.666687C10.9043 0.666687 12.0913 1.15835 12.9665 2.03352C13.8416 2.90869 14.3333 4.09568 14.3333 5.33335C14.3333 6.57103 13.8416 7.75802 12.9665 8.63319C12.0913 9.50836 10.9043 10 9.66665 10C8.42897 10 7.24198 9.50836 6.36682 8.63319C5.49164 7.75802 4.99998 6.57103 4.99998 5.33335C4.99998 4.09568 5.49164 2.90869 6.36682 2.03352C7.24198 1.15835 8.42897 0.666687 9.66665 0.666687ZM9.66665 13.3834C6.20165 13.3834 2.54998 15.0867 2.54998 15.8334V17.1167H16.7833V15.8334C16.7833 15.0867 13.1316 13.3834 9.66665 13.3834ZM9.66665 2.88335C9.01687 2.88335 8.3937 3.14148 7.93424 3.60094C7.47477 4.06041 7.21665 4.68357 7.21665 5.33335C7.21665 5.98313 7.47477 6.6063 7.93424 7.06577C8.3937 7.52523 9.01687 7.78335 9.66665 7.78335C10.3164 7.78335 10.9396 7.52523 11.3991 7.06577C11.8585 6.6063 12.1166 5.98313 12.1166 5.33335C12.1166 4.68357 11.8585 4.06041 11.3991 3.60094C10.9396 3.14148 10.3164 2.88335 9.66665 2.88335Z" fill="black"/>
</svg>

            </button>
          </Link>
  <Link href="#">
            <button >
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.5 23.5L18.2664 18.257M21.1667 11.25C21.1667 13.88 20.1219 16.4024 18.2622 18.2621C16.4024 20.1219 13.8801 21.1666 11.25 21.1666C8.61998 21.1666 6.09763 20.1219 4.2379 18.2621C2.37816 16.4024 1.33337 13.88 1.33337 11.25C1.33337 8.61992 2.37816 6.09757 4.2379 4.23784C6.09763 2.3781 8.61998 1.33331 11.25 1.33331C13.8801 1.33331 16.4024 2.3781 18.2622 4.23784C20.1219 6.09757 21.1667 8.61992 21.1667 11.25V11.25Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
</svg>

            </button>
          </Link>
  <Link href="#">
            <button>
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.16671 1.5C3.94554 1.5 1.33337 4.08533 1.33337 7.275C1.33337 9.84983 2.35421 15.9608 12.4027 22.1383C12.5827 22.2479 12.7893 22.3058 13 22.3058C13.2107 22.3058 13.4174 22.2479 13.5974 22.1383C23.6459 15.9608 24.6667 9.84983 24.6667 7.275C24.6667 4.08533 22.0545 1.5 18.8334 1.5C15.6122 1.5 13 5 13 5C13 5 10.3879 1.5 7.16671 1.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
          </Link>
  <Link href="/cart">
            <button >
            <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.2356 16.1926H7.95237L8.76995 14.5273L22.3543 14.5027C22.8137 14.5027 23.2074 14.1746 23.2895 13.7207L25.1707 3.19062C25.2199 2.91445 25.1461 2.63008 24.9656 2.41406C24.8765 2.30775 24.7652 2.22211 24.6396 2.16309C24.514 2.10407 24.3771 2.07308 24.2383 2.07227L6.95706 2.01484L6.8094 1.32031C6.71643 0.877344 6.31721 0.554688 5.86331 0.554688H1.6387C1.3827 0.554688 1.13719 0.656381 0.956172 0.837398C0.775156 1.01841 0.673462 1.26393 0.673462 1.51992C0.673462 1.77592 0.775156 2.02143 0.956172 2.20245C1.13719 2.38346 1.3827 2.48516 1.6387 2.48516H5.08127L5.72659 5.55312L7.31526 13.2449L5.26995 16.5836C5.16373 16.727 5.09975 16.8972 5.08526 17.075C5.07076 17.2528 5.10632 17.4312 5.18791 17.5898C5.35198 17.9152 5.68284 18.1203 6.04924 18.1203H7.76643C7.40035 18.6065 7.20261 19.1988 7.20315 19.8074C7.20315 21.3551 8.46096 22.6129 10.0086 22.6129C11.5563 22.6129 12.8141 21.3551 12.8141 19.8074C12.8141 19.1977 12.6117 18.6043 12.2508 18.1203H16.6559C16.2898 18.6065 16.0921 19.1988 16.0926 19.8074C16.0926 21.3551 17.3504 22.6129 18.8981 22.6129C20.4457 22.6129 21.7035 21.3551 21.7035 19.8074C21.7035 19.1977 21.5012 18.6043 21.1403 18.1203H24.2383C24.7688 18.1203 25.2035 17.6883 25.2035 17.1551C25.202 16.8994 25.0993 16.6546 24.9179 16.4743C24.7366 16.294 24.4913 16.1927 24.2356 16.1926ZM7.35901 3.91797L23.1035 3.96992L21.5613 12.6051L9.19377 12.627L7.35901 3.91797ZM10.0086 20.6715C9.53284 20.6715 9.14456 20.2832 9.14456 19.8074C9.14456 19.3316 9.53284 18.9434 10.0086 18.9434C10.4844 18.9434 10.8727 19.3316 10.8727 19.8074C10.8727 20.0366 10.7816 20.2564 10.6196 20.4184C10.4576 20.5805 10.2378 20.6715 10.0086 20.6715ZM18.8981 20.6715C18.4223 20.6715 18.034 20.2832 18.034 19.8074C18.034 19.3316 18.4223 18.9434 18.8981 18.9434C19.3739 18.9434 19.7621 19.3316 19.7621 19.8074C19.7621 20.0366 19.6711 20.2564 19.5091 20.4184C19.347 20.5805 19.1272 20.6715 18.8981 20.6715Z" fill="black"/>
</svg>

            </button>
          </Link>
          
  </div>
</header>

        {children}

        <footer className="bg-white border-t border-gray-200 py-10">
  <div className="flex gap-10">
    <div className="w-full md:w-1/4 mb-8 md:mb-0">
      <h1 className="text-3xl font-bold ml-16">Furniro.</h1>
    </div>
    <div className=" px-9 flex flex-wrap justify-between">
    <div className="w-full md:w-1/4 mb-8 md:mb-0">
      <h2 className="text-gray-400  font-medium mb-12">Links</h2>
      <ul className="space-y-8 text-black ">
        <li><a href="#"  className="hover:text-gray-600" >Home</a></li>
        <li><a href="#" className="hover:text-gray-600">Shop</a></li>
        <li><a href="#" className=" hover:text-gray-600">About</a></li>
        <li><a href="#" className=" hover:text-gray-600">Contact</a></li>
      </ul>
    </div>

    <div className="w-full md:w-1/4 mb-8 md:mb-0">
      <h2 className="text-gray-400  font-medium mb-12">Help</h2>
      <ul className="space-y-8 font-medium text-black">
        <li><a href="#" className="hover:text-gray-600">Payment Options</a></li>
        <li><a href="#" className="hover:text-gray-600">Returns</a></li>
        <li><a href="#" className="hover:text-gray-600">Privacy Policies</a></li>
      </ul>
    </div>

    <div className="w-full md:w-1/4">
      <h2 className="text-gray-400 font-medium mb-4">Newsletter</h2>
      <form className="flex items-center ">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="border-b border-black focus:outline-none focus:border-gray-500 flex-grow py-1"
        />
        <button
          type="submit"
          className="text-black font-semibold ml-2 hover:text-gray-600 border-b py-1 border-black inline-block"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  </div>
  </div>
 

  <div className="border-t border-gray-300 mt-8 pt-6  w-3/4 ml-20">
    <div className="container mx-auto px-4 text-sm text-black text-left">
      2023 Funiro. All rights reserved
    </div>
  </div>
</footer>

      </body>
    </html>
  );
}
