import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const BrandNames = ({brand}) => {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        delay: 100,
        easing: 'ease-in-out',
    });
}, []);

    return (
        <div  data-aos="fade-up"
        data-aos-duration="1000">


           <Link to={`/brandsProduct/${brand.brandName}`}>

           <div className="card md:w-96 h-56 bg-base-100 shadow-xl image-full">
  <figure><img className="w-full p-1" src={brand.brandImageURL} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{brand.brandName}</h2>
  </div>
</div>

          </Link>
        </div>
        
    );
};

export default BrandNames;