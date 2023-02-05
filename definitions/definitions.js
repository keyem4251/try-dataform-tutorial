// publish argument
publish("js_publish_example", {
  type: "table",
  dependencies: ["quickstart-source"],
  assertions: {
    rowConditions: ["test >= 1"]
  }
}).query(ctx => "SELECT 1 AS test");

// set config 
publish("js_publish_example_2").config({
  type: "table",
  dependencies: ["quickstart-source"],
  assertions: {
    rowConditions: ["test >= 1"]
  }
}).query(ctx => "SELECT 1 AS test");

// reference top-level includes
const {serviceName, serviceId} = service;

// reference nested included
const {allServiceName, allServiceId} = require("includes/allServices/service.js");

// use dataform query functions in javascript methods
publish("ref_example").query(ctx => `SELECT * FROM ${ctx.ref("quickstart-source")}`);

// declare a sql workflow data source with javascript
declare({
  database: "bigquery-public-data",
  schema: "samples",
  name: "gsod",
});

// define manual dataform assertions with javascript
assert("assertion_example").query(ctx => "SELECT * FROM quickstart-table WHERE fruit IS NULL");

// define custom SQL operations with javascript
operate("operation_example").queries("INSERT INTO quicksart-source (fruid, count) VALUES ('grape', 2)")

// use package
const { getDomain } = require("postoffice");
getDomain();
