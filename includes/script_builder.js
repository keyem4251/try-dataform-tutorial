function renderScript(table, dimensions, metrics) {
    return `
        SELECT
        ${dimensions.map((field) => `${field} AS ${field}`).join(",")},
        ${metrics.map((field) => `SUM(${field}) AS ${field}`).join(",\\n")},
        FROM ${table}
        GROUP BY ${dimensions.map((field, i) => `${i + 1}`).join(", ")}
    `;
}
module.exports = { renderScript };
