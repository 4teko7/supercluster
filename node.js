/* eslint-disable quotes */
import express from "express";
import Supercluster from "./index.js";
import GeoJSON from "./test/fixtures/places.json" assert { type: "json" };

const app = express();
const port = 3000;

let _cluster;

_cluster = new Supercluster({
  log: true,
  radius: (PIXEL * 0.1) / scale,
  // extent: 10, //Toplam pixelin kacta kaci olmali
  maxZoom: 17,
}).load(GeoJSON.features);
const trees = _cluster.trees;
console.log("trees:", trees);
const clusters = _cluster.getClusters([0, 100, 100, 0], 17);
console.log("clusters:", clusters.length);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
