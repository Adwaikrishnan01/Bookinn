const Loading = () => {

  return (

      <div className="flex w-full flex-1 flex-col items-center h-72 ">
        <div className="w-full animate-pulse flex-row items-center justify-center space-x-1 rounded-md border p-4">
          <div className="flex flex-col space-y-2 mb-6">
            <div className="h-36 w-11/12 rounded-md bg-slate-300 "></div>
            <div className="h-6 w-10/12 rounded-md bg-slate-300 "></div>
            <div className="h-6 w-9/12 rounded-md bg-slate-300 "></div>
          </div>
        </div>
      </div>
    
  );
}

export default Loading;