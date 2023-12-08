import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

const Login = () => {

const {signInUser,googleSignIn}=useContext(AuthContext)
const location =useLocation()
const naviGate=useNavigate()
const handleGoogle=()=>{
    googleSignIn()
    .then(result=>{
    console.log(result)
        Navigate(location?.state? location.state:"/")
    })
  }

const handleSignIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
    .then(result=>{
        console.log(result)
        naviGate(location?.state? location.state:"/")
    })
    .catch(error=>{
        console.log(error.message)
    })


}

    return (
        <div>
        <div>
             <h2 className="text-3xl my-10  font-bold font-mono text-center">Please Login</h2>
             <form onSubmit={handleSignIn}  className=" md:w-3/4 lg:w-1/2 mx-auto">
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
                     <button className="btn bg-slate-400">Login</button>
                 </div>
                 <div className="form-control mt-6">
                     <button  
                     onClick={ handleGoogle} 
                      className="btn btn-primary">Google Login</button>
                 </div>
             </form>
             <p className="text-center mt-4">Do not have an account <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
         </div>

     </div>
    );
};

export default Login;