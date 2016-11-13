/// <binding ProjectOpened='Run - Development' />
"use strict";

/// <binding ProjectOpened='Run - Development' />

var environment = (process.env.NODE_ENV || "development").trim();

if (environment === "development") {
    module.exports = require("./webpack.config.dev.js");
} else {
    module.exports = require("./webpack.config.prod.js");
}