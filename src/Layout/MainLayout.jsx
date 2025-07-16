import { Outlet } from "react-router-dom";
import Nav from "../Conponents/Nav";
import FaqSection from "../Conponents/FaqSection ";
import Footer from "../Conponents/Footer";

const MainLayout = () => {
    return (
            <div className="w-11/12 mx-auto">
                <Nav></Nav>
                <Outlet></Outlet>
                <FaqSection></FaqSection>
                <Footer></Footer>
            </div>
    );
};

export default MainLayout;