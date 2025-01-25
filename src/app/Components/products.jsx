function Products(params){
    return(
        <div>
          <img src={params.img} alt="dining" className="rounded" />
        <div className="p-4  font-custom text-left border bg-[#F4F5F7] flex flex-col gap-2">
            <p className="font-semibold">{params.product_name}</p>
            <p className="text-sm text-gray-500">{params.desc}</p>
            <p className="font-semibold">{params.price}</p>
        </div>
        </div>
      
    );
}
export default Products;