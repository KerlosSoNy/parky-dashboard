import { useState } from "react";
import { Customer } from "../../types";
import { Plus } from "lucide-react";
import CustomerTable from "../../components/table/table";
import DeletePopUp from "../../components/common/deleteDialog/deleteDialog";
import { Link, useNavigate } from "react-router";

export default function Booking() {
    const [data, setData] = useState<any[]>(
        [
            { id: '#B001', customerName: 'Olivia Rhye', carModel: 'Mercedes', bookingDate: '13-12-2024', status: 'Confirmed' },
            { id: '#B002', customerName: 'Phoenix Baker', carModel: 'BMW', bookingDate: '15-12-2024', status: 'Pending' },
            { id: '#B003', customerName: 'Lana Steiner', carModel: 'Audi', bookingDate: '20-12-2024', status: 'Cancelled' },
            { id: '#B003', customerName: 'Lana Steiner', carModel: 'Audi', bookingDate: '20-12-2024', status: 'Cancelled' },
            { id: '#B002', customerName: 'Phoenix Baker', carModel: 'BMW', bookingDate: '15-12-2024', status: 'Pending' },
            { id: '#B003', customerName: 'Lana Steiner', carModel: 'Audi', bookingDate: '20-12-2024', status: 'Cancelled' },
            { id: '#B003', customerName: 'Lana Steiner', carModel: 'Audi', bookingDate: '20-12-2024', status: 'Cancelled' },
            { id: '#B001', customerName: 'Olivia Rhye', carModel: 'Mercedes', bookingDate: '13-12-2024', status: 'Confirmed' },
            { id: '#B003', customerName: 'Lana Steiner', carModel: 'Audi', bookingDate: '20-12-2024', status: 'Cancelled' },
        ]);
    const navigate = useNavigate()
    const handleEdit = (id: any) => {
        navigate(`/dashboard/booking/edit/${id}`)
    };

    const handleSort = (field: keyof Customer, direction: 'asc' | 'desc') => {
        console.log(`Sort by ${field} in ${direction} order`);
        // Implement sorting functionality
        const sortedCustomers = [...data].sort((a, b) => {
            if (a[field] < b[field]) return direction === 'asc' ? -1 : 1;
            if (a[field] > b[field]) return direction === 'asc' ? 1 : -1;
            return 0;
        });
        setData(sortedCustomers);
    };

    const handlePageChange = (page: number) => {
        console.log(`Navigate to page ${page}`);
        // Implement pagination functionality
        // This would typically involve fetching data for the selected page
    };

    // Custom header content with search and action buttons
    const headerContent = (
        <div className="flex items-center space-x-3">
            {/* <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={16} className="text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Search customers..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Filter size={16} className="mr-2" />
                Filter
            </button> */}
            <Link to='add' className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Plus size={16} className="mr-2" />
                Add Booking
            </Link>
        </div>
    );

    // Custom column headers
    const customColumnHeaders: { key: string; label: string; sortable?: boolean }[] = [
        { key: 'id', label: 'Booking ID', sortable: true },
        { key: 'customerName', label: 'Customer Name', sortable: true },
        { key: 'carModel', label: 'Car Model', sortable: true },
        { key: 'bookingDate', label: 'Booking Date', sortable: true },
        { key: 'status', label: 'Status', sortable: true },
    ];
    const [isOpen, setIsOpen] = useState(false);
    const handleDelete = () => {
        setIsOpen(true)
    };

    return (
        <div className="max-w-full  bg-gray-50 p-6">
            <div className="mx-auto">
                <CustomerTable
                    data={data}
                    totalCustomers={1157}
                    title="Booking"
                    subTitle="Books"
                    headerContent={headerContent}
                    columnHeaders={customColumnHeaders}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onSort={handleSort}
                    onPageChange={handlePageChange}
                />
            </div>
            <DeletePopUp
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onConfirm={async () => {
                    setIsOpen(false)
                }}
            />
        </div>
    )
}
