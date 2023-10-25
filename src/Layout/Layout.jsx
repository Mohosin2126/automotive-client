import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Pages/Footer";


const Layout = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto mt-8">
            <Header></Header>
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>

        </div>
    );
};

export default Layout;