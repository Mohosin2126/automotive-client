import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ParticularBrand from "../Components/ParticularBrand";
import Carousel from "../Components/Carousel";

const BrandProduct = () => {

const allBrands=useLoaderData()
const {brandName}=useParams()
const [allBrandstype,setAllBrandsType]=useState([])

console.log(allBrands)


 useEffect(()=>{

  const brands=allBrands.filter(brand=>brand.brandName == brandName)
  setAllBrandsType(brands)
 },[])
 console.log(allBrandstype)


  return (
  

  <div>
<Carousel allBrands={allBrands}></Carousel>

    <div className="grid w-82 mt-10 md:w-full  md:grid-cols-2 gap-5 my-20 ml-20">
     {
    allBrandstype.map(brand=><ParticularBrand brand={brand} key={brand._id}></ParticularBrand>)
   } 
  </div>
  </div>
  );
};

export default BrandProduct;
