export default function PageHeader({ title, breadcrumb, children }) {
    const renderBreadcrumb = () => {
        if (typeof breadcrumb === "string") {
            return <span className="text-gray-500">{breadcrumb}</span>;
        } else if (Array.isArray(breadcrumb)) {
            return (
                <div className="flex items-center font-medium space-x-1 text-gray-500">
                    {breadcrumb.map((item, index) => (
                        <span key={index}>
                            {item}
                            {index < breadcrumb.length - 1 && <span className="mx-1">/</span>}
                        </span>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">{title}</span>
                <div id="breadcrumb-links" className="mt-2">
                    {renderBreadcrumb()}
                </div>
            </div>
            <div id="action-button" className="flex space-x-2">
                {children}
            </div>
        </div>
    );
}