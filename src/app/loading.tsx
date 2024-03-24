import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-1 justify-center items-center">
      <Image src="/spinner.svg" width={100} height={100} alt="loading" />
    </div>
  );
};

export default Loading;
