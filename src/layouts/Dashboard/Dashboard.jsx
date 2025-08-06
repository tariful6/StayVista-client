import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className=" relative min-h-screen md:flex">
            <div><Sidebar></Sidebar></div>
            <div className="flex-1 md:ml-72"> <Outlet></Outlet></div>
        </div>
    );
};

export default Dashboard;