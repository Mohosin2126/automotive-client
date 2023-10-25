import swal from "sweetalert";
import Swal from "sweetalert2";

const MycartProduct = ({ brand}) => {

    const { _id, name, image, price, type } = brand;
    const handleDelete = (_id) => {
      
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://automotive-server-rust.vercel.app/mycart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                    
                        if (data.deletedCount > 0) {
                            swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            );
                           
                        }
                    });
            }
        });
    };

    return (
        <div>
            <div className="w-96 lg:w-full gap-5">
                <div className=" lg:flex items-center gap-5 ">
                    <div>
                        <img src={image} className="rounded-lg shadow-2xl w-80  md:w-96 h-52" alt="" />
                    </div>
                    <div>
                        
                        <p className="ml-2 mt-1 text-base font-semibold">{name}</p>
                        <p className="font-medium">{type}</p>
                        <p className="font-normal">{price}</p>
                        <button onClick={() => handleDelete(_id)} className="py-1 px-2 border-1 btn-warning btn-sm rounded">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MycartProduct;
