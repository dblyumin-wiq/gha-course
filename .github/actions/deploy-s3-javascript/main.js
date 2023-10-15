const core = require('@actions/core')
const github = require('@actions/core')
const exec = require('@actions/core')

function run() {
    core.notice('Hello from the custom JS action!');
}

run;