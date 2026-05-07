import Link from "next/link";

export default function About() {
  return (
    <div className="font-custom">
      {/* Breadcrumb */}
      <div className="bg-[#F9F1E7] py-16 text-center">
        <h1 className="text-3xl font-bold">About Us</h1>
        <div className="flex items-center justify-center gap-2 mt-2 text-sm">
          <Link href="/" className="font-semibold">Home</Link>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black"/>
          </svg>
          <p>About</p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 px-4 md:px-16 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="flex-1">
          <h2 className="text-4xl font-bold leading-tight mb-6">
            Crafting Spaces,<br/>
            <span className="text-[#B88E2F]">Inspiring Lives</span>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Furniro was born from a simple belief — that everyone deserves a home that feels both beautiful and functional. We bring together timeless craftsmanship and modern design to create furniture that lasts generations.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Each piece in our collection is carefully sourced and quality-checked, ensuring that what arrives at your home is nothing short of exceptional.
          </p>
        </div>

        {/* ✅ Replaced placeholder with a real furniture image */}
        <div className="flex-1 bg-[#F9F1E7] rounded-2xl h-80 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
            alt="Furniro elegant sofa"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#F9F1E7] py-12 md:py-20 px-4 md:px-16">
        <h3 className="text-2xl font-bold text-center mb-12">Why Choose Furniro?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Premium Quality",
              desc: "Every piece is crafted from carefully selected materials to ensure durability and elegance that stands the test of time.",
              icon: (
                // ✅ Shield / quality badge icon
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
              ),
            },
            {
              title: "Timeless Design",
              desc: "Our designers blend classic aesthetics with modern sensibilities, creating furniture that never goes out of style.",
              icon: (
                // ✅ Diamond / design gem icon
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
                  <line x1="12" y1="2" x2="12" y2="22"/>
                  <path d="M2 8.5h20M2 15.5h20"/>
                </svg>
              ),
            },
            {
              title: "Customer First",
              desc: "From browsing to delivery, we ensure a seamless experience with dedicated support every step of the way.",
              icon: (
                // ✅ Heart / care icon
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              ),
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
              {/* ✅ Icon inside gold circle */}
              <div className="w-10 h-10 bg-[#B88E2F] rounded-full mb-4 flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="py-12 md:py-20 px-4 md:px-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "50K+", label: "Happy Customers" },
            { number: "2000+", label: "Products" },
            { number: "15+", label: "Years Experience" },
            { number: "30+", label: "Cities Delivered" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-[#B88E2F]">{stat.number}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#F9F1E7] py-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Space?</h3>
        <p className="text-gray-500 mb-8">Explore our latest collection and find the perfect piece for your home.</p>
        <Link href="/shop">
          <button className="bg-[#B88E2F] text-white px-12 py-4 rounded-lg hover:bg-[#a07828] transition-colors">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}