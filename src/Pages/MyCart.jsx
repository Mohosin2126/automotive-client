import { useLoaderData } from "react-router-dom";
import MycartProduct from "../Components/MycartProduct";



const MyCart = () => {

const brands=useLoaderData()


    return (
        <div className="grid w-full lg:grid-cols-2 gap-4 mt-20">
            {
                brands.map(brand=><MycartProduct brand={brand}  key={brand._id}   ></MycartProduct>)
            }
        </div>
    );
};

export default MyCart;