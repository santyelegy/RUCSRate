import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const AppLayout = () => {
    return <div style={{
        padding: '90px 0px 0px 360px'
    }}>
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;
