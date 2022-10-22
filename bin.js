#!/usr/bin/env node
const boxen = require("boxen");

function gracefullExit(pm = "pnpm") {
    const boxenOpts = { padding: 1, borderColor: "red" };
    console.error(
        boxen(pm.toUpperCase() + 
            ' is not supported here.\nUse PNPM instead.',
            boxenOpts
        )
    );
    process.exit(1);
}  

// Assert that only-pnpm is not installed as a dependency
const cwd = process.env.INIT_CWD || process.cwd();
if (cwd.includes('node_modules')) process.exit(1);

// Get parent process package manager
var pm = '';
const userAgent = process.env.npm_config_user_agent?.split('/');
if (!userAgent || userAgent.length === 0) pm = "npm"; // assume npm
else pm = userAgent[0];

if (pm !== "pnpm") gracefullExit(pm)