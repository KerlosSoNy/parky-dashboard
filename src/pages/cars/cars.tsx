import { useEffect, useState } from "react";
import { Customer } from "../../types";
import { Plus } from "lucide-react";
import CustomerTable from "../../components/table/table";
import DeletePopUp from "../../components/common/deleteDialog/deleteDialog";
import { Link, useNavigate } from "react-router";
import axiosInstance from "../../utils/axios/axios";
import { toast } from "sonner";

export default function Cars() {
    const navigate = useNavigate()
    const [data, setData] = useState<any>([])
    useEffect(() => {
        axiosInstance.get('vehicles/').then((res) => {
            setData(res?.data)
        })
    }, [])

    const handleEdit = (id: any) => {
        navigate(`/dashboard/cars/edit/${id}`)
    };
    console.log(data)
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

    // const handlePageChange = (page: number) => {
    //     console.log(`Navigate to page ${page}`);
    //     // Implement pagination functionality
    //     // This would typically involve fetching data for the selected page
    // };

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
            <Link to="/dashboard/cars/add" className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Plus size={16} className="mr-2" />
                Add Car
            </Link>
        </div>
    );

    // Custom column headers
    const customColumnHeaders: { key: string; label: string; sortable?: boolean }[] = [
        { key: 'id', label: 'Car ID', sortable: false },
        { key: 'car_model', label: 'Car Name', sortable: true },
        { key: 'license_plate', label: 'Car Plate', sortable: true },
        { key: 'vehicle_type', label: 'Model', sortable: false },
        { key: 'vehicle_color', label: 'Color', sortable: true },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState<number | null>(null)
    const handleDelete = (user_id: number) => {
        setIsOpen(true);
        setId(user_id);
    };

    const handleView = (item_id: number) => {
        navigate(`/dashboard/cars/view/${item_id}`)
    };

    const confirmDelete = async () => {
        axiosInstance.delete(`vehicles/${id}/`).then(() => {
            setData(data.filter((item: any) => item.id !== id))
            toast.success("Car deleted successfully", { id: "Error-Validation" });
            setIsOpen(false)
        }).catch(() => {
            toast.error("Error deleting car", { id: "Error-Validation" });
        })
    }
    return (
        <div className="max-w-full  bg-gray-50 p-6">
            <div className="mx-auto">
                <CustomerTable
                    data={data || []}
                    totalCustomers={data?.length || 0}
                    title="Cars"
                    subTitle="Car"
                    headerContent={headerContent}
                    columnHeaders={customColumnHeaders}
                    onEdit={handleEdit}
                    onView={handleView}
                    onDelete={handleDelete}
                    onSort={handleSort}
                />
            </div>
            <DeletePopUp
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onConfirm={() => {
                    confirmDelete();
                }}
            />
        </div>
    )
}
