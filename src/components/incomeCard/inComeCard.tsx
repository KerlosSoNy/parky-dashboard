
export default function IncomeCard() {
    return (
        <div className="w-full max-w-[339px] bg-white p-6 rounded-[8px] border-[1px] border-[#EAEAEA] relative">
            <h3 className="text-[16px] font-light text-gray-500">Total Income</h3>
            <p className="text-[24px] mt-[10px] font-bold text-black">EGP 187,918.76</p>
            <p className="text-sm text-green-600">↑ +3%

                <span className="text-black/50 ms-1">Compare with last month</span>
            </p>
            <div className="mt-6 flex flex-row justify-between items-center border-[#F0F0F0] border-t-[1px] pt-6">
                <a href="#" className="text-sm text-green-600 flex items-center">Learn more</a>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6666 9.18954L11.025 7.54788L8.34998 4.87288C7.78332 4.31454 6.81665 4.71454 6.81665 5.51454V10.7062V15.3812C6.81665 16.1812 7.78332 16.5812 8.34998 16.0145L12.6666 11.6979C13.3583 11.0145 13.3583 9.88121 12.6666 9.18954Z" fill="#05A144" />
                </svg>
            </div>
            <button title='share' type="button" className="absolute top-6 end-6">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                        <path d="M12 2.44788C6.48 2.44788 2 6.92788 2 12.4479C2 17.9679 6.48 22.4479 12 22.4479C17.52 22.4479 22 17.9679 22 12.4479" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13 11.4479L21.2 3.24788" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22 7.27788V2.44788H17.17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </svg>
            </button>
        </div>
    );
};

