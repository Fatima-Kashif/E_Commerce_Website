// export default function SameLayout({ children, }: { children: React.ReactNode; }) {
//   return (
//     <div>
//         {children} 
//         <footer className="bg-black py-20 mt-12">
//   <div className="flex flex-wrap justify-around gap-8 md:gap-16">
//     <div className="flex gap-4 items-center justify-start max-w-xs">
//       <img src="reward.png" alt="trophy" className="w-10 h-10 md:w-12 md:h-12" />
//       <div className="flex flex-col">
//         <h2 className="text-[#B88E2F] text-lg md:text-xl font-bold">High Quality</h2>
//         <p className="text-[#B6B6B6] text-sm md:text-base">Crafted from top materials</p>
//       </div>
//     </div>
//     <div className="flex gap-4 items-center justify-start max-w-xs">
//       <img src="check.png" alt="verify" className="w-10 h-10 md:w-12 md:h-12" />
//       <div className="flex flex-col">
//         <h2 className="text-[#B88E2F] text-lg md:text-xl font-bold">Warranty Protection</h2>
//         <p className="text-[#B6B6B6] text-sm md:text-base">Over 2 years</p>
//       </div>
//     </div>
//     <div className="flex gap-4 items-center justify-start max-w-xs">
//       <img src="support.png" alt="support" className="w-10 h-10 md:w-12 md:h-12" />
//       <div className="flex flex-col">
//         <h2 className="text-[#B88E2F] text-lg md:text-xl font-bold">Free Shipping</h2>
//         <p className="text-[#B6B6B6] text-sm md:text-base">Order over $150</p>
//       </div>
//     </div>
//     <div className="flex gap-4 items-center justify-start max-w-xs">
//       <img src="call.png" alt="support" className="w-10 h-10 md:w-12 md:h-12" />
//       <div className="flex flex-col">
//         <h2 className="text-[#B88E2F] text-lg md:text-xl font-bold">24 / 7 Support</h2>
//         <p className="text-[#B6B6B6] text-sm md:text-base">Dedicated support</p>
//       </div>
//     </div>
//   </div>
// </footer>
//     </div>
//   );
// }
export default function SameLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <footer className="bg-black py-10 mt-12">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 px-4">
          {/* Quality */}
          <div className="flex gap-4 items-center justify-start max-w-xs">
            <img src="reward.png" alt="High Quality" className="w-12 h-12 md:w-14 md:h-14" />
            <div className="flex flex-col">
              <h2 className="text-[#B88E2F] text-lg md:text-xl font-bold">High Quality</h2>
              <p className="text-[#B6B6B6] text-sm md:text-base">Crafted from top materials</p>
            </div>
          </div>
          {/* Warranty */}
          <div className="flex gap-4 items-center justify-start max-w-xs">
            <img src="check.png" alt="Warranty Protection" className="w-12 h-12 md:w-14 md:h-14" />
            <div className="flex flex-col">
              <h2 className="text-[#B88E2F] text-lg md:text-xl font-bold">Warranty Protection</h2>
              <p className="text-[#B6B6B6] text-sm md:text-base">Over 2 years</p>
            </div>
          </div>
          {/* Free Shipping */}
          <div className="flex gap-4 items-center justify-start max-w-xs">
            <img src="support.png" alt="Free Shipping" className="w-12 h-12 md:w-14 md:h-14" />
            <div className="flex flex-col">
              <h2 className="text-[#B88E2F] text-lg md:text-xl font-bold">Free Shipping</h2>
              <p className="text-[#B6B6B6] text-sm md:text-base">Order over $150</p>
            </div>
          </div>
          {/* Support */}
          <div className="flex gap-4 items-center justify-start max-w-xs">
            <img src="call.png" alt="24/7 Support" className="w-12 h-12 md:w-14 md:h-14" />
            <div className="flex flex-col">
              <h2 className="text-[#B88E2F] text-lg md:text-xl font-bold">24 / 7 Support</h2>
              <p className="text-[#B6B6B6] text-sm md:text-base">Dedicated support</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
