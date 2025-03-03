import { Link } from "react-router";

export default function SignleLink({
    isMenuOpen,
    title,
    icon,
    to = '/',
    currentPath,
}: {
    title: string;
    isMenuOpen: boolean;
    icon: React.ReactNode;
    to?: string;
    currentPath?: string;
}) {
    const isSelected = currentPath === to;
    return (
        <Link
            to={to}
            className={`flex flex-row mx-auto my-3 py-[12px] ${isSelected ? 'text-primary' : 'text-[#5d5d5d]'
                } ${isMenuOpen ? 'gap-2 justify-start px-[12px]' : 'justify-center px-[25px]'
                } items-center `}
        >
            {
                isSelected && <div className="bg-primary rounded-e-[20px] h-[70px] w-[7px] absolute start-0" />
            }
            <div className={`${!isMenuOpen && "justify-center"} ${isMenuOpen && "w-[100px] -ms-16"} flex gap-4 items-center flex-1`}>
                <span className='text-[20px] font-bold w-[40px] flex flex-row justify-start'>{icon}</span>
                <span
                    className={`transition duration-1000 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0 hidden'
                        } text-[21px] font-medium pt-[2px]`}
                >
                    {title}
                </span>
            </div>
        </Link>
    );
}
