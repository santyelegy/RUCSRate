import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const AppLayout = () => {
    return <div style={{
        padding: '10vh 10vh 0vw 20vw'
    }}>
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;
