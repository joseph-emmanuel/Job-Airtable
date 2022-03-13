import "../styles/globals.css";
import Airtable from "airtable";

const base = new Airtable({ apiKey: "keyn2sQcuCrmnrpHM" }).base(
  "appA3hZCqcv36Wcwu"
);

function MyApp({ Component, pageProps }) {
  // const [goals,setGoals]=useState([])
  base("goals")
    .select({ view: "Grid view" })
    .eachPage((records, fetchNextPage) => {
      console.log(records);
      fetchNextPage();
    });

  return <Component {...pageProps} />;
}

export default MyApp;
