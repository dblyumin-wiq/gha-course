const core = require('@actions/core');
// const github = require('@actions/github');  // useful utils for API calls and GitHub context access
const exec = require('@actions/exec');

function run() {
    // get inputs
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: true });
    const distFolder = core.getInput('dist-folder', { required: true });

    // upload files, using bundled AWS CLI
    const s3Uri = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

    core.notice('Hello from the custom JS action!');
}

run();