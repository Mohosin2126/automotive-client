import Aos from "aos";
import { useEffect } from "react";
const Looking = () => {
  useEffect(() => {
    Aos.init({
        duration: 1000,
        delay: 100,
        easing: 'ease-in-out',
    });
}, []);


    return (
        <div className="my-20 md:flex w-96 md:w-full  md:gap-5 ">
            <div data-aos="flip-left" className="card  md:w-1/2 bg-base-100 shadow-sm image-full">
  <figure><img src="https://i.ibb.co/JjdwZ0w/2022-mercedes-benz-eqs-580-edition-one-exterior-front-quarter.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">ARE YOU LOOKING FOR A CAR </h2>
    <p>When it comes to finding the perfect car, several essential factors demand consideration to ensure a seamless and satisfactory purchase. Budget constraints serve as the initial point of reference, guiding your exploration within a feasible financial scope...</p>
    <div className="card-actions ">
    <button className="bg-transparent hover:bg-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
Read More
</button>
    </div>
  </div>
</div>
<div data-aos="flip-right"  className="card  md:w-1/2 bg-base-100 shadow-sm image-full">
  <figure><img src="https://i.ibb.co/58XmCH8/2021-BMW-7-Series-Two-Tone-Special-Edition-1.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">DO YOU WANT TO SELL YOUR CAR </h2>
    <p>Are you considering parting ways with your current vehicle? Selling your car can be a straightforward process with the right approach. Begin by thoroughly cleaning and assessing your cars condition to make a positive first impression on potential buyers...</p>
    <div className="card-actions ">
    <button className="bg-transparent hover:bg-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
Read More
</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Looking;