import Products from './Components/products';
import { client } from "./lib/sanity";
import { urlFor } from "./lib/sanity";
async function getData(){
  const query = `*[_type == "product"]|order(_createdAt asc){
   "productimage":productimage.asset->url,
  title,
    description,
    price
  }`;
  const data=await client.fetch(query);
  return data;
}
async function Home(){
  const data= await getData();
  console.log(data);
    return (
    <div className="font-custom">

<div className="font-custom">
  <div className="relative">
    <img src="banner.png" alt="banner" className="w-full" />
    <section className="absolute top-1/4 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-[60%] bg-[#FFF3E3] p-6 md:p-10 pt-[4%] text-left h-auto md:h-[50%] w-[90%] md:w-[36%] rounded shadow-lg">
      <p className="font-custom mb-3 font-semibold text-sm md:text-base">New Arrival</p>
      <h1 className="text-2xl md:text-4xl font-bold mb-4 font-custom text-[#B88E2F] leading-tight">
        Discover Our <br /> New Collection
      </h1>
      <p className="font-custom mb-6 md:mb-10 text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
      </p>
      <button className="bg-[#B88E2F] text-white py-3 px-8 md:py-4 md:px-12 font-bold text-sm hover:bg-yellow-600 transition rounded">
        BUY NOW
      </button>
    </section>
  </div>

  <section className="p-6 md:p-8 text-center mt-8">
    <h3 className="text-xl md:text-2xl font-bold mb-4">Browse The Range</h3>
    <p className="font-custom mb-8 text-gray-500 text-sm md:text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-4">
      <div className="text-center">
        <img src="dining.png" alt="dining" className="rounded mx-auto w-[90%] md:w-auto" />
        <div className="p-2 md:p-4 font-semibold text-sm md:text-base">Dining</div>
      </div>
      <div className="text-center">
        <img src="living.png" alt="living" className="rounded mx-auto w-[90%] md:w-auto" />
        <div className="p-2 md:p-4 font-semibold text-sm md:text-base">Living</div>
      </div>
     
      <div className="text-center">
        <img src="bedroom.png" alt="bedroom" className="rounded mx-auto w-[90%] md:w-auto" />
        <div className="p-2 md:p-4 font-semibold text-sm md:text-base">Bedroom</div>
      </div>
    </div>
  </section>
</div>

      <section className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-10 text-center ">Our Products</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {/* I made a component and passing the params from here for reusability and called the component here */}
          {data && data.length > 0 ? (
    data.slice(0, 8).map((product, idx) => (
        <Products
            key={idx}
            img={urlFor(product.productimage)?.url()}
            productname={product.title}
            desc={product.description}
            price={product.price}
        />
    ))
) : (
    <p>Loading products...</p>
)}
         
        </div>
        <button className='border-[#B88E2F] border-2 text-[#B88E2F] py-3 px-12'>Show more</button>
      </section>

  <section className="bg-[#FCF8F3] p-8 text-center flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
  <div className="w-full lg:w-[30%] text-left ml-0 lg:ml-20">
    <h1 className="text-2xl md:text-4xl font-bold mb-4">
      50+ Beautiful rooms <br /> Inspiration
    </h1>
    <p className="text-gray-600 mb-6">
      Our designer already made a lot of beautiful prototipes of rooms that inspire you.
    </p>
    <button className="bg-[#B88E2F] text-white py-2 px-6 md:py-4 md:px-12 font-bold text-sm hover:bg-yellow-600 transition rounded">
      Explore More
    </button>
  </div>

  <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
    <div className="relative w-full sm:w-auto">
      <img
        src="frames.png"
        alt="frames"
        className="w-full sm:w-auto max-w-full h-auto"
      />
      <div className="flex">
        <div className="absolute  absolute top-3/4 left-1/3  transform -translate-x-1/2 bg-white bg-opacity-50 p-4 sm:p-6 py-6 sm:py-8 ">
          <p className="text-gray-600">01 — Bed Room</p>
          <h1 className="text-[#3A3A3A] font-bold text-xl sm:text-2xl">
            Inner Peace
          </h1>
        </div>
        <div className="absolute bottom-5 left-2/3 sm:right-1/3">
          <button className="bg-[#B88E2F] px-3 sm:px-4 py-2 text-white font-bold">
            →
          </button>
        </div>
      </div>
    </div>
      <img src="dininghall.png" alt="dininghall" />
      <img src="hlf2.png" alt="half" />
      </div>
      </section>

      <section className="py-8 text-center">
        <p className='text-center text-gray-500 font-semibold'>Share your setup with</p>
        <h3 className="text-2xl font-bold mb-4">#FurniroFurniture</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <div className='flex gap-4 flex-col'>
          <div className='flex gap-4'>
          <img src="hlf2.png" alt="" />
          <img src="laptop.png" alt="" />
          </div>
          <div className='flex gap-4'>
          <img src="brown_chair.png" alt="" />
          <img src="sidetable.png" alt="" />
          </div>
          </div >
          <div className='flex items-center ' >
          <img src="dinigtable.png" alt="" />
          </div>
          <div className='flex gap-4 flex-col'>
          <div className='flex gap-4'>
          <img src="lux_bed.png" alt="" />
          <img src="dinner.png" alt="" />
          </div>
          <div className='flex gap-4'>
          <img src="wall.png" alt="" />
          <img src="kitchen.png" alt="" />
          </div>
          </div>
        </div>
      </section>
    </div>
  

        );
}
export default Home;