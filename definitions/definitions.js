// publish argument
  publish("js_publish_example", {
    type: "table",
    dependencies: ["quickstart-source"],
    assertions: {
      rowConditions: ["test >= 1"]
    }
  }).query(ctx => "SELECT 1 AS test");