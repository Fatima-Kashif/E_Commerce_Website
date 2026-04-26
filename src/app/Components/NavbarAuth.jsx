"use client";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";

export default function NavbarAuth() {
  const { isSignedIn } = useUser();

  return (
    <div className="flex items-center gap-5">
      {!isSignedIn ? (
        <>
          <SignInButton mode="modal">
            <button className="text-sm border border-black rounded-full px-5 py-2 hover:bg-black hover:text-white transition-colors">
              Sign In
            </button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button className="text-sm bg-[#B88E2F] text-white rounded-full px-5 py-2 hover:bg-[#a07828] transition-colors">
              Sign Up
            </button>
          </SignUpButton>
        </>
      ) : (
        <>
          <Link
            href="/orders"
            className="text-sm hover:text-[#B88E2F] transition-colors hidden md:block"
          >
            My Orders
          </Link>

          <UserButton afterSignOutUrl="/" />
        </>
      )}
    </div>
  );
}