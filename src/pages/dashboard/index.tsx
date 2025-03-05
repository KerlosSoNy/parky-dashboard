import { Outlet } from "react-router";
import SideBar from "../../components/sideBar/sideBar";
import TopNavbar from "../../components/common/navbar";
import { useEffect } from "react";
import { getToken } from "../../utils/functions/decryption";
import { RootState } from "../../utils/redux/store";
import { useSelector } from "react-redux";

export default function DashBoard() {
    const Menu = useSelector((state: RootState) => state.Menu.menu);
    useEffect(() => {
        console.log(getToken().then((res) => console.log(res)));
    }, [])
    return (
        <div className="flex flex-row max-w-full w-[100%] overflow-x-hidden">
            <SideBar />
            <div className={`flex flex-col duration-700 transition-all ${Menu ? "w-[calc(100%-300px)]" : "w-[100%]"}`}>
                <TopNavbar />
                <div className="w-full overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
