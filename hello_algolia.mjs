// hello_algolia.mjs
import algoliasearch from "algoliasearch";

const appID = "ZMCX8B53ID";
const apiKey = "a9efa54725a3aada722387ede2634154";

// Connect and authenticate with your Algolia app
const client = algoliasearch(appID, apiKey);

// Create a new index and add a record
const index = client.initIndex("test_index");
const record = { objectID: 1, name: "test_record" }

await index.saveObject(record).wait();

// Search the index for "test" and print the results
const { hits } = await index.search("test");
console.log(JSON.stringify(hits[0]));
