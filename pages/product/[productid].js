import React, { useEffect, useState } from "react";
import { Component, Fragment } from "react";
import { useRouter } from "next/router";
import { JobsDetails } from "../../components/JobsDetails";
import { Jobs } from "../../components/Jobs";

import Airtable from "airtable";
import { route } from "next/dist/server/router";
const base = new Airtable({ apiKey: "keyn2sQcuCrmnrpHM" }).base(
  "appZC3aPIkxGNuZXj"
);

function ProductDetails() {
  const [jobs, setJobs] = useState([]);
  const [c, setc] = useState([]);
  let currentJob;
  const router = useRouter();
  const productId = router.query.productid;

  useEffect(() => {
    base("Jobs")
      .select({
        filterByFormula: `{ID} = "${productId}"`,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            setc(records);
            //   console.log("Retrieved job record", record);
          });
        },
        function done(error) {}
      );
  }, []);

  console.log("My current job is : ", c);
  return (
    <div>
      Details about Product Details {productId}
      <div>
        {c.map((c) => (
          <JobsDetails className="bg-emerald-400" key={c.id} job={c} />
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;
