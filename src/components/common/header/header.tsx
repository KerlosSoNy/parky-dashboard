import { FaUser, FaChevronLeft } from "react-icons/fa";

const PageHeader = ({
    mainTitle,
    subTitle,
    showBackButton = true,
    showBreadcrumb = true,
    icon: Icon = FaUser
}: { mainTitle: string, subTitle?: string, showBackButton?: boolean, showBreadcrumb?: boolean, icon?: any }) => {
    const handleBack = () => {
        window.history.back();
    };

    return (
        <div className="w-full bg-gray-50 border-b border-gray-200">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {showBreadcrumb && (
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span onClick={handleBack} className="hover:text-gray-700 cursor-pointer">Dashboard</span>
                        <span className="mx-2">/</span>
                        <span className="text-gray-700">{mainTitle}</span>
                    </div>
                )}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                    <div className="flex items-center space-x-4">
                        {showBackButton && (
                            <button
                                onClick={handleBack}
                                className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
                                aria-label="Go back"
                            >
                                <FaChevronLeft className="h-5 w-5 text-gray-600" />
                            </button>
                        )}
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-primary sm:text-3xl">
                                    {mainTitle}
                                </h1>
                                {subTitle && (
                                    <p className="mt-1 text-sm text-gray-500 font-medium">
                                        {subTitle}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;