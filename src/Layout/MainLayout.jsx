import { Outlet } from "react-router-dom";
import Nav from "../Conponents/Nav";
import FaqSection from "../Conponents/FaqSection ";
import Footer from "../Conponents/Footer";
import Campaign from "../Conponents/Campaign";

const MainLayout = () => {
    return (
            <div className="w-11/12 mx-auto">
                <Nav></Nav>
                <Outlet></Outlet>
                <Campaign></Campaign>
                <FaqSection></FaqSection>
                <Footer></Footer>
            </div>
    );
};

export default MainLayout;