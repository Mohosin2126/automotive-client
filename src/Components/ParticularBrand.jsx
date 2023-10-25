import { Link } from "react-router-dom";


const ParticularBrand = ({brand}) => {
   const {_id,image,name,rating,price,}=brand ||{}
    return (
        <div className="">
           <div className="card mx-auto  md:w-[150] bg-slate-200 shadow-xl">
  <figure><img className="h-64 w-[500px]" src={image}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-serif">
     {name}
     <div className="badge badge-accent">{rating}</div>
    </h2>
    
    <p className="font-mono">{price}</p>
    <div className="card-actions ">
  
<Link to={`/brands/${_id}`}><button className="btn glass bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-xl btn-sm">Details</button></Link>
<Link to={`/update/${_id}`}><button className="btn glass bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-xl btn-sm">Update</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ParticularBrand;