import { Plus } from 'lucide-react';
import { useState } from 'react'
import CustomerTable from '../../components/table/table';

export default function Garage() {
    const [garages, setGarages] = useState<any[]>([
        { id: '#3098', garageName: 'Madrid Garage', address: 'Madrid', noSpots: 25, noFilled: 3 },
        { id: '#3095', garageName: 'Madrid Garage', address: 'Madrid', noSpots: 21, noFilled: 1 },
        { id: '#3094', garageName: 'Madrid Garage', address: 'Madrid', noSpots: 12, noFilled: 4 },
        { id: '#3093', garageName: 'Madrid Garage', address: 'Madrid', noSpots: 15, noFilled: 5 },
        { id: '#3092', garageName: 'Madrid Garage', address: 'Madrid', noSpots: 74, noFilled: 5 },
        { id: '#3091', garageName: 'Madrid Garage', address: 'Madrid', noSpots: 12, noFilled: 3 },
        { id: '#3090', garageName: 'Madrid Garage', address: 'Madrid', noSpots: 25, noFilled: 2 },
        { id: '#3089', garageName: 'Madrid Garage', address: 'Madrid', noSpots: 7, noFilled: 1 },
        { id: '#3088', garageName: 'Madrid Garage', address: 'Madrid', noSpots: 21, noFilled: 3 },
        { id: '#3087', garageName: 'Madrid Garage', address: 'Madrid', noSpots: 27, noFilled: 2 },
    ]);
    const handleEdit = (customer: number) => {
        console.log('Edit customer:', customer);
        // Implement edit functionality
    };

    const handleDelete = (customer: any) => {
        console.log('Delete customer:', customer);
        // Implement delete functionality
        setGarages(garages.filter(c => c.id !== customer.id));
    };

    const handleSort = (field: any, direction: 'asc' | 'desc') => {
        console.log(`Sort by ${field} in ${direction} order`);
        // Implement sorting functionality
        const sortedCustomers = [...garages].sort((a, b) => {
            if (a[field] < b[field]) return direction === 'asc' ? -1 : 1;
            if (a[field] > b[field]) return direction === 'asc' ? 1 : -1;
            return 0;
        });
        setGarages(sortedCustomers);
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
                Add Garage
            </button>
        </div>
    );

    // Custom column headers
    const customColumnHeaders: { key: string; label: string; sortable?: boolean }[] = [
        { key: 'id', label: 'Car ID', sortable: false },
        { key: 'garageName', label: 'Garage Name', sortable: true },
        { key: 'address', label: 'Address', sortable: true },
        { key: 'noSpots', label: 'No Spots', sortable: false },
        { key: 'noFilled', label: 'No Filled', sortable: true }
    ];
    return (
        <div className="max-w-full  bg-gray-50 p-6">
            <div className="mx-auto">
                <CustomerTable
                    data={garages}
                    totalCustomers={10157}
                    title="Garages"
                    subTitle="Garage"
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
