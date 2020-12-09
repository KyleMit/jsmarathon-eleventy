const { promises: fs } = require("fs");
const path = require("path");
const fetch = require("node-fetch");

// invoke main
main();

async function main() {
  // go get breed data
  let resp = await fetch("https://api.thecatapi.com/v1/breeds");
  let json = await resp.json();

  // go write data to _data/breeds.json
  let output = JSON.stringify(json, null, 2);

  let rootDir = path.join(__dirname, "/..");

  await fs.mkdir(`${rootDir}/_data`, { recursive: true });
  await fs.writeFile(`${rootDir}/_data/breeds.json`, output, "utf8");
}
