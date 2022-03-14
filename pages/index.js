import Head from "next/head";
import styles from "../styles/Home.module.css";
import Airtable from "airtable";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Jobs } from "../components/Jobs";

const base = new Airtable({ apiKey: "keyn2sQcuCrmnrpHM" }).base(
  "appZC3aPIkxGNuZXj"
);
export default function Home() {
  const [jobs, setJobs] = useState([]);
  // const [updates, setUpdates] = useState([]);

  useEffect(() => {
    base("Jobs")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setJobs(records);
        fetchNextPage();
        console.log(records);
      });
  }, []);

  return (
    <div className="">
      <div className="relative">
        {" "}
        <h1 className="text-[#97c93d] text-[40px] pl-[40px] pt-[40px] mb-[20px] post-title">
          Current Job Openings
        </h1>
      </div>

      <div className="grid grid-rows-2 grid-flow-col gap-4">
        {jobs.map((job) => (
          <Jobs className="bg-emerald-400" key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
