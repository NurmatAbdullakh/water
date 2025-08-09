import { Outlet } from "react-router-dom";
import "./index.css";

export const CenteredLayout = () => {
    return (
        <div className="centered-layout">
            <div className="centered-container">
                <Outlet />
            </div>
        </div>
    )
}