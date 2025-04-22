import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MoreVertical, Edit, Trash2, ChevronUp, ChevronDown, Eye } from 'lucide-react';

export interface ColumnHeader {
    key: string;
    label: string;
    sortable?: boolean;
    width?: string;
}

interface CustomerTableProps {
    data: {}[];
    totalCustomers?: number;
    title?: string;
    subTitle?: string;
    headerContent?: React.ReactNode;
    columnHeaders?: ColumnHeader[];
    onEdit?: (item: any) => void;
    onDelete?: (item: any) => void;
    onView?: (item: any) => void;
    onSort?: (field: any, direction: 'asc' | 'desc') => void;
    onPageChange?: (page: number) => void;
}

const CustomerTable: React.FC<CustomerTableProps> = ({
    data,
    totalCustomers = 0,
    title = "Customers",
    subTitle = "Users",
    headerContent,
    columnHeaders,
    onEdit,
    onDelete,
    onView,
    onSort,
    onPageChange
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortField, setSortField] = useState<any>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const totalPages = 10;

    // Default column headers if none provided
    const defaultColumnHeaders: {
        key: string;
        label: string;
        sortable?: boolean;
    }[] = [
            { key: 'id', label: '#', sortable: false },
            { key: 'name', label: 'Customer', sortable: true },
            { key: 'number', label: 'Number', sortable: true },
            { key: 'licenseId', label: 'License ID', sortable: false },
            { key: 'registrationDate', label: 'Registration Date', sortable: false },
            { key: 'subscriptionType', label: 'Subscription Type', sortable: false },
            { key: 'walletBalance', label: 'Wallet Balance', sortable: false }
        ];

    // Use provided column headers or defaults
    const headers: any = columnHeaders || defaultColumnHeaders;

    const handleSort = (field: any) => {
        const newDirection = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortDirection(newDirection);

        if (onSort) {
            onSort(field, newDirection);
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);

        if (onPageChange) {
            onPageChange(page);
        }
    };

    const getSortIcon = (field: any) => {
        if (sortField !== field) {
            return null;
        }
        return sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
    };

    const handleEdit = (item_id: number) => {
        if (onEdit) {
            onEdit(item_id);
        }
    };
    const handleView = (item_id: number) => {
        if (onView) {
            onView(item_id);
        }
    };

    const handleDelete = (item_id: number) => {
        if (onDelete) {
            onDelete(item_id);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow">
            <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center">
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <div className="text-[13px] text-[#6941C6] font-[500] mt-1 py-1 px-3 border-[1px] rounded-full ms-4">{totalCustomers.toLocaleString()} {subTitle}</div>
                </div>
                {headerContent && <div className="ml-4">{headerContent}</div>}
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <div className="flex items-center space-x-1">
                                    <span>{headers[0]?.label}</span>
                                </div>
                            </th>
                            {headers.slice(1).map((header: any) => (
                                <th
                                    key={header.key}
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    style={header.width ? { width: header.width } : {}}
                                >
                                    <div
                                        className={`flex items-center space-x-1 ${header.sortable ? 'cursor-pointer' : ''}`}
                                        onClick={header.sortable ? () => handleSort(header.key) : undefined}
                                    >
                                        <span>{header.label}</span>
                                        {header.sortable && getSortIcon(header.key)}
                                    </div>
                                </th>
                            ))}
                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <MoreVertical size={16} className="mx-auto" />
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((item: any) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                {headers.map((header: any) => {
                                    if (header?.key === 'id') {
                                        return (
                                            (
                                                <td key={header.key} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {header.render ? header.render(item) : item[header.key]}
                                                </td>
                                            )
                                        )
                                    } else if (header?.key === 'walletBalance') {
                                        return (
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <span className={`font-medium ${item.walletBalance.startsWith('+')
                                                    ? 'text-green-600'
                                                    : 'text-red-600'
                                                    }`}>
                                                    {header.render ? header.render(item) : item[header.key]}
                                                </span>
                                            </td>
                                        )
                                    } else if (header?.key === 'name' || header?.key === 'first_name' || header?.key === 'last_name') {
                                        console.log(item?.profile_picture)
                                        return (<td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                {(item?.avatar || item?.profile_picture) && <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full" src={item.avatar || item?.profile_picture} alt="" />
                                                </div>}
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {header.render ? header.render(item) : item[header.key]}
                                                    </div>
                                                    {item.email && <div className="text-sm text-gray-500">{item.email}</div>}
                                                </div>
                                            </div>
                                        </td>)
                                    } else if (header?.key === 'subscriptionType') {
                                        return (
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.subscriptionType === 'VIP'
                                                    ? 'bg-blue-100 text-blue-800'
                                                    : 'bg-purple-100 text-purple-800'
                                                    }`}>
                                                    {header.render ? header.render(item) : item[header.key]}
                                                </span>
                                            </td>
                                        )
                                    } else if (header?.key === 'is_active') {
                                        return (
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.is_active
                                                    ? 'bg-blue-100 text-blue-800'
                                                    : 'bg-purple-100 text-purple-800'
                                                    }`}>
                                                    {item.is_active ? "Active" : "Inactive"}
                                                </span>
                                            </td>
                                        )
                                    } else if (header?.key === 'color') {
                                        return (
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    style={{
                                                        backgroundColor: `rgba(${hexToRgb(item.color)}, 0.05)`, // 0.1 for 10% opacity
                                                        color: item.color,
                                                        borderColor: item.color,
                                                        border: '1px solid'
                                                    }}
                                                    className={`px-2 inline-flex text-xs text-white leading-5 font-light rounded-full`}>
                                                    {header.render ? header.render(item) : item[header.key]}
                                                </span>
                                            </td>
                                        )
                                    } else {
                                        if (header?.key === "end_time" || header?.key === "start_time") {
                                            return (
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {item[header.key].split("T")[0] + " " + item[header.key].split("T")[1].split(".")[0].split(":")[0] + ":" + item[header.key].split("T")[1].split(".")[0].split(":")[1]}
                                                </td>
                                            )
                                        } else {
                                            return (
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {header.render ? header.render(item) : item[header.key]}
                                                </td>
                                            )
                                        }
                                    }
                                })}
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                                    <div className="flex justify-center space-x-2">
                                        <button
                                            title='Edit'
                                            className="text-gray-400 hover:text-gray-500"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                        <button
                                            title='View'
                                            className="text-gray-400 hover:text-gray-500"
                                            onClick={() => handleView(item.id)}
                                        >
                                            <Eye size={16} />
                                        </button>
                                        <button
                                            title='Edit'
                                            className="text-gray-400 hover:text-gray-500"
                                            onClick={() => handleEdit(item.id)}
                                        >
                                            <Edit size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                    <button
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Next
                    </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeft size={16} />
                            <span className="ml-1">Previous</span>
                        </button>
                    </div>
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === i + 1
                                        ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                                        : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div>
                        <button
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="mr-1">Next</span>
                            <span className="sr-only">Next</span>
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerTable;


export const hexToRgb = (hex: string): string => {
    hex = hex.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
};