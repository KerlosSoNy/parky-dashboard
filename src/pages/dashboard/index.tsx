import { Outlet } from "react-router";
import SideBar from "../../components/sideBar/sideBar";
import TopNavbar from "../../components/common/navbar";
import { useEffect } from "react";
import { getToken } from "../../utils/functions/decryption";

export default function DashBoard() {
    useEffect(() => {
        console.log(getToken().then((res) => console.log(res)));
    }, [])
    return (
        <div className="flex flex-row w-screen h-screen">
            <SideBar />
            <div className="flex flex-col w-full">
                <TopNavbar />
                <div className="max-w-full overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
