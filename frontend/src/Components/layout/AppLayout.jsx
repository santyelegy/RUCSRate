import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const AppLayout = () => {
    return <div style={{
        padding: '90px 40px 0px 320px'
    }}>
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;
