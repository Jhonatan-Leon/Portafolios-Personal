

export const Progress = ({ progress }) => {
    return (
        <div className="w-full -bottom-2 bg-gray-300 rounded-full h-2 mt-2 relative">
            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs font-bold text-primary">
                {progress}%
            </span>
            <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${progress}%`, minWidth: "5px" }}
            />
        </div>
    );

};

