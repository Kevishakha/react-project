import React from "react";

function Services({ title, summary }) {
  return (
    <>
      <div className="bg-slate-100 py-3 max-w-[100vw]">
        <div className="text-center h-auto w-full flex flex-col bg-slate-100 items-center ">
          <h1 className="text-black  text-3xl text-center font-extrabold mt-4 mb-2">
            {title}
          </h1>
          <div className="services mb-5">{summary}</div>
        </div>
      </div>
    </>
  );
}

export default Services;
