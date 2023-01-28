import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const AppLayout = () => {
    return <div style={{
        padding: '12.5vh 5vw 10vh 20vw'
    }}>
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;
