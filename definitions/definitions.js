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
