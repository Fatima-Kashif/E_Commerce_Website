"use client";
import Link from "next/link";
import { useAuth } from "./AuthProvider";
import { useRouter } from "next/navigation";

export default function NavbarAuth() {
  const { user, isLoaded, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push("/");
  };

  if (!isLoaded) return null;

  return (
    <div className="flex items-center gap-5">
      {!user ? (
        <>
          <Link href="/signin">
            <button className="text-sm border border-black rounded-full px-5 py-2 hover:bg-black hover:text-white transition-colors">
              Sign In
            </button>
          </Link>
          <Link href="/signup">
            <button className="text-sm bg-[#B88E2F] text-white rounded-full px-5 py-2 hover:bg-[#a07828] transition-colors">
              Sign Up
            </button>
          </Link>
        </>
      ) : (
        <>
          <span className="text-sm text-gray-600 hidden md:block">
            Hi, <span className="font-medium text-black">{user.first_name}</span>
          </span>
          <Link href="/orders" className="text-sm hover:text-[#B88E2F] transition-colors hidden md:block">
            My Orders
          </Link>
          <button
            onClick={handleSignOut}
            className="text-sm border border-black rounded-full px-5 py-2 hover:bg-black hover:text-white transition-colors"
          >
            Sign Out
          </button>
        </>
      )}
    </div>
  );
}