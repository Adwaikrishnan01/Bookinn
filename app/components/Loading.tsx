const Loading = () => {
    return ( <div
      >
        <div className="flex flex-col gap-2 w-full bg-gray-200 rounded-md p-4">
          <div className="aspect-square w-full relative overflow-hidden rounded-md">
            {/* Skeleton loading animation for the image */}
            <div className="animate-pulse w-full h-40 bg-gray-300 rounded-t-md"></div>
          </div>
          <div className="p-4">
            {/* Skeleton loading animation for the title */}
            <h2 className="text-xl font-semibold text-gray-800 animate-pulse">Loading...</h2>
            {/* Skeleton loading animation for the description */}
            <p className="mt-2 text-gray-600 animate-pulse">.</p>
            {/* Skeleton loading animation for the price */}
            <div className="mt-1 text-lg animate-pulse"></div>
          </div>
        </div>
      </div>
       );
}
 
export default Loading;