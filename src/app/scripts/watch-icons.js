// scripts/watch-icons.js
const chokidar = require("chokidar");
const { exec } = require("child_process");

chokidar
    .watch("assets/icons/*.svg")
    .on("add", runScript)
    .on("change", runScript)
    .on("unlink", runScript);

function runScript(path) {
    console.log(`🔄 Regenerating icons due to change: ${path}`);
    exec("yarn generate:icons");
}
