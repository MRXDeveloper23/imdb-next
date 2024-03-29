"use client";

import React, { useEffect } from "react";

type Props = {
  error: Error;
  reset: Function;
};

const Error = ({ error, reset }: Props) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <h1>Something went wrong. Please try again</h1>
      <button className="hover:text-amber-500" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
