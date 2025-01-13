export function Error() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-red-100 to-red-200 text-red-800 p-6">
            <div className="text-center">
                <h1 className="text-5xl font-extrabold mb-4 animate-pulse">Something Went Wrong</h1>
                <p className="text-lg mb-8">
                    We’re sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists.
                </p>
                <button
                    className="bg-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105"
                    onClick={() => window.location.reload()}
                >
                    Refresh Page
                </button>
            </div>
        </div>
    );
}
