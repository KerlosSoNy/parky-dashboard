import { useState } from "react";
import { Customer } from "../../types";
import { Plus } from "lucide-react";
import CustomerTable from "../../components/table/table";
import DeletePopUp from "../../components/common/deleteDialog/deleteDialog";
import { Link, useNavigate } from "react-router";

export default function Customers() {
    const [customers, setCustomers] = useState<Customer[]>([
        {
            id: '#3066',
            name: 'Olivia Rhye',
            email: 'olivia@untitledui.com',
            number: '+20 101 981 1806',
            licenseId: 'ABC 123',
            registrationDate: '13 - 12 - 2024',
            subscriptionType: 'Standard',
            walletBalance: '+500 EGP',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
            id: '#3065',
            name: 'Phoenix Baker',
            email: 'phoenix@untitledui.com',
            number: '+20 101 981 1806',
            licenseId: 'ABC 123',
            registrationDate: '13 - 12 - 2024',
            subscriptionType: 'VIP',
            walletBalance: '+500 EGP',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
            id: '#3064',
            name: 'Lana Steiner',
            email: 'lana@untitledui.com',
            number: '+20 101 981 1806',
            licenseId: 'ABC 123',
            registrationDate: '13 - 12 - 2024',
            subscriptionType: 'Standard',
            walletBalance: '+500 EGP',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
            id: '#3063',
            name: 'Demi Wilkinson',
            email: 'demi@untitledui.com',
            number: '+20 101 981 1806',
            licenseId: 'ABC 123',
            registrationDate: '13 - 12 - 2024',
            subscriptionType: 'VIP',
            walletBalance: '-300 EGP',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
            id: '#3062',
            name: 'Candice Wu',
            email: 'candice@untitledui.com',
            number: '+20 101 981 1806',
            licenseId: 'ABC 123',
            registrationDate: '13 - 12 - 2024',
            subscriptionType: 'Standard',
            walletBalance: '+500 EGP',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
            id: '#3061',
            name: 'Natali Craig',
            email: 'natali@untitledui.com',
            number: '+20 101 981 1806',
            licenseId: 'ABC 123',
            registrationDate: '13 - 12 - 2024',
            subscriptionType: 'VIP',
            walletBalance: '+500 EGP',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
            id: '#3060',
            name: 'Drew Cano',
            email: 'drew@untitledui.com',
            number: '+20 101 981 1806',
            licenseId: 'ABC 123',
            registrationDate: '13 - 12 - 2024',
            subscriptionType: 'Standard',
            walletBalance: '+500 EGP',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
            id: '#3059',
            name: 'Orlando Diggs',
            email: 'orlando@untitledui.com',
            number: '+20 101 981 1806',
            licenseId: 'ABC 123',
            registrationDate: '13 - 12 - 2024',
            subscriptionType: 'Standard',
            walletBalance: '+500 EGP',
            avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
            id: '#3058',
            name: 'Andi Lane',
            email: 'andi@untitledui.com',
            number: '+20 101 981 1806',
            licenseId: 'ABC 123',
            registrationDate: '13 - 12 - 2024',
            subscriptionType: 'VIP',
            walletBalance: '+500 EGP',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
            id: '#3057',
            name: 'Kate Morrison',
            email: 'kate@untitledui.com',
            number: '+20 101 981 1806',
            licenseId: 'ABC 123',
            registrationDate: '13 - 12 - 2024',
            subscriptionType: 'Standard',
            walletBalance: '+500 EGP',
            avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }
    ]);

    const navigate = useNavigate()
    const handleEdit = (id: any) => {
        navigate(`/dashboard/customers/edit/${id}`)
    };
    const handleSort = (field: keyof Customer, direction: 'asc' | 'desc') => {
        console.log(`Sort by ${field} in ${direction} order`);
        // Implement sorting functionality
        const sortedCustomers = [...customers].sort((a, b) => {
            if (a[field] < b[field]) return direction === 'asc' ? -1 : 1;
            if (a[field] > b[field]) return direction === 'asc' ? 1 : -1;
            return 0;
        });
        setCustomers(sortedCustomers);
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
                Add Customer
            </Link>
        </div>
    );

    // Custom column headers
    const customColumnHeaders: { key: string; label: string; sortable?: boolean }[] = [
        { key: 'id', label: 'ID', sortable: false },
        { key: 'name', label: 'Customer', sortable: true },
        { key: 'number', label: 'Number', sortable: true },
        { key: 'licenseId', label: 'License ID', sortable: false },
        { key: 'registrationDate', label: 'Registration Date', sortable: true },
        { key: 'subscriptionType', label: 'Subscription Type', sortable: true },
        { key: 'walletBalance', label: 'Wallet Balance', sortable: true }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const handleDelete = () => {
        setIsOpen(true)
    };

    return (
        <div className="max-w-full  bg-gray-50 p-6">
            <div className="mx-auto">
                <CustomerTable
                    data={customers}
                    totalCustomers={150157}
                    title="Customers"
                    subTitle="Customer"
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
