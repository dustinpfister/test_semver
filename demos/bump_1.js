let semver = require('semver'),
path_packJSON = process.argv[3] || '../package.json',
fs = require('fs'),
pack = require(path_packJSON),
release = process.argv[2] || 'patch',

v = semver.valid(pack.version);

if (v) {
    pack.version = semver.inc(v, release);
    fs.writeFile(path_packJSON, JSON.stringify(pack), (e) => {
        if (e) {
            console.log(e.message);
        } else {
            console.log('package.json version updated to ' + pack.version);
        }
    })
} else {
    console.log('package.json does not contain a valid version number');
}
