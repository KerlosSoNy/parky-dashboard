import { useState } from "react";
import BarChartComponent from "../../components/barChart/barChart";
import IncomeCard from "../../components/incomeCard/inComeCard";
import NotificationsList from "../../components/notifications/notifications";
import CustomerTable from "../../components/table/table";
import CustomSelectMenu from "../../components/common/selectMenu/selectMenu";

export default function Home() {
    const [data, setData] = useState<any[]>(
        [
            { transactionId: '#T001', customerName: 'Olivia Rhye', amount: '300 EGP', date: '13-12-2024', status: 'Completed' },
            { transactionId: '#T002', customerName: 'Phoenix Baker', amount: '500 EGP', date: '15-12-2024', status: 'Pending' },
            { transactionId: '#T003', customerName: 'Lana Steiner', amount: '200 EGP', date: '20-12-2024', status: 'Failed' },
            { transactionId: '#T001', customerName: 'Olivia Rhye', amount: '300 EGP', date: '13-12-2024', status: 'Completed' },
            { transactionId: '#T002', customerName: 'Phoenix Baker', amount: '500 EGP', date: '15-12-2024', status: 'Pending' },
            { transactionId: '#T003', customerName: 'Lana Steiner', amount: '200 EGP', date: '20-12-2024', status: 'Failed' },
            { transactionId: '#T001', customerName: 'Olivia Rhye', amount: '300 EGP', date: '13-12-2024', status: 'Completed' },
            { transactionId: '#T002', customerName: 'Phoenix Baker', amount: '500 EGP', date: '15-12-2024', status: 'Pending' },
            { transactionId: '#T003', customerName: 'Lana Steiner', amount: '200 EGP', date: '20-12-2024', status: 'Failed' },
            { transactionId: '#T001', customerName: 'Olivia Rhye', amount: '300 EGP', date: '13-12-2024', status: 'Completed' },
            { transactionId: '#T002', customerName: 'Phoenix Baker', amount: '500 EGP', date: '15-12-2024', status: 'Pending' },
            { transactionId: '#T003', customerName: 'Lana Steiner', amount: '200 EGP', date: '20-12-2024', status: 'Failed' },

        ]);

    const handleEdit = (customer: any) => {
        console.log('Edit customer:', customer);
        // Implement edit functionality
    };

    const handleDelete = (customer: any) => {
        console.log('Delete customer:', customer);
        // Implement delete functionality
        setData(data.filter((c: any) => c.id !== customer.id));
    };

    const handleSort = (field: any, direction: 'asc' | 'desc') => {
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
        <div className="flex items-center">
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
            <CustomSelectMenu placeholder="Weekly" options={[{ id: 1, name: 'Weekly' }, { id: 2, name: 'Monthly' }, { id: 3, name: 'Yearly' }]} />
            {/* <button className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Plus size={16} className="mr-2" />
                Add Customer
            </button> */}
        </div>
    );

    // Custom column headers
    const customColumnHeaders: { key: string; label: string; sortable?: boolean }[] = [
        { key: 'transactionId', label: 'Transaction ID', sortable: true },
        { key: 'customerName', label: 'Customer Name', sortable: true },
        { key: 'amount', label: 'Amount', sortable: true },
        { key: 'date', label: 'Date', sortable: true },
        { key: 'status', label: 'Status', sortable: true },
    ];


    return (
        <div className="px-[40px] pt-[32px] flex flex-col">
            <div className="flex flex-row flex-wrap items-center justify-between">
                <IncomeCard />
                <IncomeCard />
                <IncomeCard />
            </div>
            <div className="flex flex-row mt-6 gap-6 mb-6">
                <BarChartComponent />
                <NotificationsList />
            </div>
            <CustomerTable
                data={data}
                totalCustomers={5017}
                title="Top Garages"
                subTitle="Garage"
                headerContent={headerContent}
                columnHeaders={customColumnHeaders}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onSort={handleSort}
                onPageChange={handlePageChange}
            />
        </div>)
}
