interface Notification {
    title: string;
    time: string;
}

const notifications: Notification[] = [
    { title: 'New Update', time: '01:00 PM - 02:00 PM' },
    { title: '+50 EGP GIFT', time: '02:00 PM - 03:00 PM' },
    { title: 'BLACK FRIDAY', time: '03:00 PM - 04:00 PM' },
];

export default function NotificationsList() {
    return (
        <div className="w-full max-w-sm min-h-[350px] max-h-[600] bg-white p-4 relative rounded-lg shadow-md">
            <h3 className="text-[34px] font-bold text-primary">Notifications</h3>
            <ul className="flex flex-col gap-[21px] mt-[27px]">
                {notifications.map((notification, index) => (
                    <li key={index} className="border-l-4 border-green-600 pl-2 mb-2">
                        <p className="font-bold text-[16px] text-primary">{notification.title}</p>
                        <p className="text-[12px] text-[#A3AED0] font-medium">{notification.time}</p>
                    </li>
                ))}
            </ul>
            <a href="#" className="text-[16px] font-bold gap-1 absolute bottom-6 end-6 text-primary flex justify-end items-center mt-2">
                <span>View all Notifications</span>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 13.5L17.17 13.5L13.59 17.09L15 18.5L21 12.5L15 6.5L13.59 7.91L17.17 11.5L3 11.5L3 13.5Z" fill="#05A144" />
                </svg>

            </a>
        </div>
    );
};