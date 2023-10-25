import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import swal from "sweetalert";

const Register = () => {
const {createUser}=useContext(AuthContext)

const handleRegister=e=>{
  e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

   
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
       
        return (swal("Error!", "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character", "error"))
    } 

createUser(email,password)
.then(result=>{
    console.log(result)
    return (swal("Success!", "Registration Successful", "success"))
})
.catch(error=>{
    console.log(error.message)
    return (swal("Error!", "Already User", "error"))
})
}




    return (
        <div>
           
        <div>
            <h2 className="text-3xl my-10 text-center">Please Register</h2>
            <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
        </div> 
       
    </div>
    );
};

export default Register;