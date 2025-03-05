import { Link, useNavigate } from "react-router";
import { AppDispatch, RootState } from "../../utils/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../utils/redux/sidebar";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import SearchBar from "./searchBar/searchBar";

export default function TopNavbar() {
    const navigate = useNavigate();
    const User = useSelector((state: RootState) => state.Login);
    const [currentDateTime] = useState(new Date());
    const formattedDate = currentDateTime.toLocaleDateString('en-GB', {
        weekday: 'short',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    const Menu = useSelector((state: RootState) => state.Menu.menu);
    const dispatch = useDispatch<AppDispatch>();
    return (

        <nav className=" flex justify-between max-w-full items-center py-4 px-6 bg-[#FFFFFF] ">
            <div className="flex flex-row">
                <button
                    aria-label="Toggle navigation"
                    onClick={() => dispatch(setMenu(Menu))}
                    className="text-ADA7A7  hover:text-[#1FA8C9] focus:outline-none"
                >
                    <MenuIcon size={30} color="#3E435D" />
                </button>
                <div className="flex flex-col ms-8">
                    <span className="text-[#3E435D] text-[24px] font-medium ">
                        Welcome {User?.userData?.first_name || "Fathy Tamer"}
                    </span>
                    <span className="text-[#5d5d5d]  text-[16px] font-light">
                        {formattedDate}
                    </span>
                </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
                <SearchBar />
                <button
                    onClick={() => navigate("/dashboard/notification")}
                    className="relative flex items-center justify-center"
                >
                    <img src="/assets/icons/notification.svg" alt="" />
                    <span className="absolute end-[-5px] -top-[10px] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                        3
                    </span>
                </button>
                <div className="flex items-center space-x-[20px]">
                    <Link to={"profile"}>
                        <img
                            src={User.userData.image || "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            className="w-[52px] h-[52px] rounded-[10px] object-cover"
                            alt="Profile Placeholder"
                        />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
