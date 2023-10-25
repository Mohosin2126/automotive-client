import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateForm = () => {
    const brands = useLoaderData();

const {_id,brandName,image,name,price
,rating,type
}=brands
    const handleUpdateBrand = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandname.value;
        const rating = form.rating.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortdescription = form.shortdescription.value;
        const updateBrand = { image, name, brandName, rating, type, price, shortdescription };

        fetch(`https://automotive-server-rust.vercel.app/allBrands/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBrand)
        })
            .then(res => res.json())
            .then(data => {
           
                if (data.modifiedCount>0) {
                    swal("Thank You!", "Brand Updated succeessfully!", "success");
                }
            });
    };

    return (
        <div className="bg-[#464542] p-24">
            <h2 className="text-3xl font-extrabold text-center mb-10">Update a Product</h2>
            <form onSubmit={handleUpdateBrand}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandname" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className=" mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="shortdescription" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Submit" className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateForm;
