import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center flex-col m-10">
      <div
        className="h-8 w-8 animate-spin rounded-full border-4 border-blue-400 border-solid border-current border-r-transparent text-info motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
      <div>
        <span className="text-gray-500">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
