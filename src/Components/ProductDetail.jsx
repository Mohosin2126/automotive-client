import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const ProductDetail = () => {
    const [brands, setBrands] = useState([]);
    const allBrands = useLoaderData();
  
    const { id } = useParams();
 
    useEffect(() => {
        const findBrand = allBrands?.find((brand) => brand._id == id);
        setBrands(findBrand);
    }, []);
  

    const handleAddToCart = () => {
       
        fetch("https://automotive-server-rust.vercel.app/mycart", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(brands)
        })
            .then(res => res.json())
            .then(data => {
            
                if (data.insertedId) {
                    swal("Thank You!", "Product Added succeessfully!", "success");
                }
            });
    };

    return (
        <div className="mb-20 mt-20">
            <div>
                <div>
                    <img src={brands.image} className="w-full h-[500px]" alt="" />
                </div>
                <h1 className="text-black text-2xl font-semibold mt-5">{brands.name}</h1>
                <h3 className="text-black text-base font-normal">{brands.price}</h3>
            </div>
            <button
                onClick={handleAddToCart}
                className="bg-transparent hover:bg-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded btn-sm mt-5"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductDetail;
