import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="font-custom">
      <div className="bg-[#F9F1E7] py-8 px-10">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
          <span>Home</span>
          <svg width="6" height="10" viewBox="0 0 8 14" fill="none">
            <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="#9F9F9F"/>
          </svg>
          <span>Sign In</span>
        </div>
      </div>
      <div className="flex justify-center items-center py-20">
        <SignIn />
      </div>
    </div>
  );
}