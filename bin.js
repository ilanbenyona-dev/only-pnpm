#!/usr/bin/env node

function gracefullExit(pm = "pnpm") {
    let msg =  pm.toUpperCase() + ' is not supported here.\n Install using PNPM instead.';
    console.error("\x1b[1m\x1b[31m%s\x1b[31m", '###'.repeat(10));
    console.error("\x1b[37m", msg, "\x1b[4m");
    console.error("\x1b[31m%s\x1b[31m\n", '###'.repeat(10))

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