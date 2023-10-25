import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import BrandNames from "../Components/BrandNames";
import OurServices from "../Components/OurServices";
import Looking from "../Components/Looking";

const Home = () => {
    const brands=useLoaderData()
    
     return (
        <div>
             <Banner></Banner>
         <div className="mt-16 ">
            <div>
                <h1 className="text-3xl text-center font-serif font-semibold">Our Brand</h1>
                <p className="text-center font-sans">Harnessing the power of creativity and a forward-thinking approach, our brand is heading towards a destination where breakthroughs and success converge to create a legacy of distinction</p>
            </div>
         <div className="grid md:grid-cols-3 gap-5 mt-14">
          {
                brands.map(brand=><BrandNames brand={brand} key={brand._id}></BrandNames>)
            }
           
          </div>
         </div>
            
            <OurServices></OurServices>
            {/* <CustomerFeedback></CustomerFeedback> */}
            <Looking></Looking>
        </div>
    );
};

export default Home;