function Home(){
    return (
//         import React from 'react';

// const App = () => {
// //   return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center"> 
        <img src="furniro logo.png" alt="logo" className="w-[50px] h-[50px]"/>
        <h1 className="text-xl font-bold font-custom">Furniro</h1>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-black">Home</a>
          <a href="#" className="text-gray-700 hover:text-black">Shop</a>
          <a href="#" className="text-gray-700 hover:text-black">About</a>
          <a href="#" className="text-gray-700 hover:text-black">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-yellow-100 p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Discover Our New Collection</h2>
        <p className="text-gray-600 mb-6">Modern and stylish furniture for every room.</p>
        <button className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600">Shop Now</button>
      </section>

      {/* Category Section */}
      <section className="p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Browse The Range</h3>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="p-4 border rounded">Dining</div>
          <div className="p-4 border rounded">Living</div>
          <div className="p-4 border rounded">Bedroom</div>
        </div>
      </section>

      {/* Products Section */}
      <section className="p-8">
        <h3 className="text-2xl font-bold mb-4 text-center">Our Products</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5', 'Product 6'].map((product, index) => (
            <div key={index} className="border rounded p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <img src="https://via.placeholder.com/150" alt={product} className="mb-2" />
              <h4 className="font-bold">{product}</h4>
              <p className="text-gray-600">$99.99</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="bg-gray-100 p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">50+ Beautiful Rooms Inspiration</h3>
        <p className="text-gray-600 mb-6">Find inspiration for your next room makeover.</p>
        <button className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-700">View Inspiration</button>
      </section>

      {/* Instagram Section */}
      <section className="p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">#FurnireFurniture</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <img
              key={item}
              src="https://via.placeholder.com/150"
              alt="Instagram Post"
              className="rounded w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 Furnire. All Rights Reserved.</p>
      </footer>
    </div>
  

        );
}
export default Home;