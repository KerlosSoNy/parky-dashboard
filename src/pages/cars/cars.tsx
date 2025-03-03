import { useState } from "react";
import { Customer } from "../../types";
import { Plus } from "lucide-react";
import CustomerTable from "../../components/table/table";

export default function Cars() {
    const [data, setData] = useState<any[]>(
        [{
            id: '#3066',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Olivia Rhye', email: 'olivia@untitled.ui', carPlate: '+20 101 081 1806', model: 'Mercedes', color: 'Red'
        },
        {
            id: '#3065',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', name: 'Phoenix Baker', email: 'phoenix@untitled.ui', carPlate: '+20 101 081 1806', model: 'Mercedes', color: 'Blue'
        },
        { id: '#3064', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', name: 'Lana Steiner', email: 'lana@untitled.ui', carPlate: '+20 101 081 1806', model: 'Mercedes', color: 'Yellow' },
        { id: '#3063', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', name: 'Demi Wilkinson', email: 'demi@untitled.ui', carPlate: '+20 101 081 1806', model: 'Mercedes', color: 'Red' },
        { id: '#3062', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', name: 'Candice Wu', email: 'candice@untitled.ui', carPlate: '+20 101 081 1806', model: 'Mercedes', color: 'Blue' },
        { id: '#3061', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', name: 'Natali Craig', email: 'natali@untitled.ui', carPlate: '+20 101 081 1806', model: 'Mercedes', color: 'Yellow' },
        { id: '#3060', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', name: 'Drew Cano', email: 'drew@untitled.ui', carPlate: '+20 101 081 1806', model: 'Mercedes', color: 'Red' },
        { id: '#3059', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', name: 'Orlando Diggs', email: 'orlando@untitled.ui', carPlate: '+20 101 081 1806', model: 'Mercedes', color: 'Blue' },
        { id: '#3058', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', name: 'Andi Lane', email: 'andi@untitled.ui', carPlate: '+20 101 081 1806', model: 'Mercedes', color: 'Yellow' },
        { id: '#3057', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', name: 'Kate Morrison', email: 'kate@untitled.ui', carPlate: '+20 101 081 1806', model: 'Mercedes', color: 'Red' },
        ]);

    const handleEdit = (customer: any) => {
        console.log('Edit customer:', customer);
        // Implement edit functionality
    };

    const handleDelete = (customer: any) => {
        console.log('Delete customer:', customer);
        // Implement delete functionality
        setData(data.filter(c => c.id !== customer.id));
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
            <button className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Plus size={16} className="mr-2" />
                Add Customer
            </button>
        </div>
    );

    // Custom column headers
    const customColumnHeaders: { key: string; label: string; sortable?: boolean }[] = [
        { key: 'id', label: 'Car ID', sortable: false },
        { key: 'name', label: 'Customer', sortable: true },
        { key: 'carPlate', label: 'Car Plate', sortable: true },
        { key: 'model', label: 'Model', sortable: false },
        { key: 'color', label: 'Color', sortable: true },
    ];


    return (
        <div className="max-w-full  bg-gray-50 p-6">
            <div className="mx-auto">
                <CustomerTable
                    data={data}
                    totalCustomers={50157}
                    title="Cars"
                    subTitle="Car"
                    headerContent={headerContent}
                    columnHeaders={customColumnHeaders}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onSort={handleSort}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}
