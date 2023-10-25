import Aos from "aos";
import { useEffect } from "react";

const OurServices = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            delay: 100,
            easing: 'ease-in-out',
        });
    }, []);


    return (
       <div  >
         <div className="mt-16" data-aos="fade-up">
           <h1 className="text-center font-medium font-mono text-xl">Shopping Tools</h1>
           <h1 className="text-center font-serif font-semibold text-2xl mt-5"> FIND YOUR CAR</h1>
           <div className="text-center items-center  md:flex justify-evenly mt-16">
                <div  className="space-y-8">
<img src="https://i.ibb.co/4NbsYqg/2555059.png" alt="" className="h-20  w-32 flex mx-auto" />
<h1 className=" font-serif font-medium text-lg">Find a New Car</h1>
<button className="bg-transparent hover:bg-red-500 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
New Car Search
</button>
                </div>
                <div   className="space-y-8">
<img  src="https://i.ibb.co/CVjQ08w/741407.png" alt="" className="h-20 w-32 flex mx-auto"/>
<h1 className=" font-serif font-medium text-lg">Test Drive Now</h1>
<button className="bg-transparent hover:bg-red-500 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
Book a Test Drive 
</button>
                </div>
                <div  className="space-y-8 ">
<img src="https://i.ibb.co/Qf60Bnx/3301565.png" alt="" className="h-20  w-32 flex mx-auto  " />
<h1 className=" font-serif font-medium text-lg">Premimum Selection</h1>
<button className="bg-transparent hover:bg-red-500 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
Search For Premium
</button>
                </div>
           </div>
        </div>
       </div>
    );
};

export default OurServices;
