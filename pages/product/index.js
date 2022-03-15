import Head from "next/head";
import Airtable from "airtable";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Jobs } from "../../components/Jobs";
const base = new Airtable({ apiKey: "keyn2sQcuCrmnrpHM" }).base(
  "appZC3aPIkxGNuZXj"
);
function index() {
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
    <div>
      {jobs.map((job) => (
        <div>
          <Link href={`/product/${job.id}`}>
            <a> Job {job.fields.title}</a>
          </Link>
          {/* <Jobs className="bg-emerald-400" key={job.id} job={job} /> */}
        </div>
      ))}
    </div>
  );
}

export default index;
