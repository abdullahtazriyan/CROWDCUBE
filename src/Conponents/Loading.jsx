

const Loading = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-white">
            <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                <p className="text-blue-500 font-semibold">Loading...</p>
            </div>
        </div>
    );
};

export default Loading;