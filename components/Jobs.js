import React from "react";

export const Jobs = ({ job }) => {
  return (
    <div className="ml-12 ">
      <h2 className="text-[24px] font-bold">{job.fields.title}</h2>
      <p>{job.fields.Description}</p>
      <div className="border-t-[2px] mt-[60px] pt-[15px] border-[#bcd888]">
        <p>Posted on {job.fields.PostedOn}</p>
        <p>Posted on {job.id}</p>
      </div>
    </div>
  );
};
